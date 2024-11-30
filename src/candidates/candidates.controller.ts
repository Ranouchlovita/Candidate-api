import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './candidate.dto';
import { Candidate } from './candidates.entity';

@Controller('candidates')
export class CandidatesController {
    constructor(private readonly candidatesService: CandidatesService) {}

    @Post()
    create(@Body() createCandidateDto: CreateCandidateDto): Promise<Candidate> {
        return this.candidatesService.create(createCandidateDto);
    }

    @Get()
    findAll(): Promise<Candidate[]> {
        return this.candidatesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Candidate> {
    const candidate = await this.candidatesService.findOne(+id);
    if (!candidate) {
        throw new NotFoundException(`Candidate with id ${id} not found`);
    }
    return candidate;

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCandidateDto: CreateCandidateDto): Promise<Candidate> {
        return this.candidatesService.update(+id, updateCandidateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.candidatesService.remove(+id);
    }
}
