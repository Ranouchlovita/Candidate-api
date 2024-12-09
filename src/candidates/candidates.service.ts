import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Candidate } from './candidates.entity';
import { CreateCandidateDto } from './candidate.dto';

@Injectable()
export class CandidatesService {
    getStatisticsByYear(year: number): Candidate[] | PromiseLike<Candidate[]> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Candidate)
        private readonly candidatesRepository: Repository<Candidate>,
    ) {}

    create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
        const candidate = this.candidatesRepository.create(createCandidateDto);
        return this.candidatesRepository.save(candidate);
    }

    
    findAll(): Promise<Candidate[]> {
        return this.candidatesRepository.find();
    }

    async findOne(id: number): Promise<Candidate | null> {
        return await this.candidatesRepository.findOne({ where: { id } });
    }
    
    

    async update(id: number, updateCandidateDto: CreateCandidateDto): Promise<Candidate> {
        const candidate = await this.findOne(id);
        if (!candidate) {
            throw new NotFoundException('Candidate not found');
        }
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
