import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Candidate } from './candidates.entity';
import { CreateCandidateDto } from './candidate.dto';

@Injectable()
export class CandidatesService {
    constructor(
        @InjectRepository(Candidate)
        private readonly candidatesRepository: Repository<Candidate>,
    ) {}

    
    async create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
        const candidate = this.candidatesRepository.create(createCandidateDto);
        return this.candidatesRepository.save(candidate);
    }

    
    findAll(): Promise<Candidate[]> {
        return this.candidatesRepository.find();
    }

    findOne(id: number): Promise<Candidate> {
        return this.candidatesRepository.findOneBy({ id });
    }

    async getStatisticsByYear(year: number): Promise<Candidate[]> {
        return this.candidatesRepository.find({
            where: {
                recruited: true,
                recruitmentYear: year,
            },
        });
    }
    
    

    async update(id: number, updateCandidateDto: CreateCandidateDto): Promise<Candidate> {
        const candidate = await this.findOne(id); 
        Object.assign(candidate, updateCandidateDto);
        return this.candidatesRepository.save(candidate);
    }

   
    async remove(id: number): Promise<void> {
        const result = await this.candidatesRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Candidate with id ${id} not found`);
        }
    }
}
