import { Controller, Get, Post, Body, Param, Patch, Delete, NotFoundException } from '@nestjs/common';
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
    findOne(@Param('id') id: string): Promise<Candidate> {
        return this.candidatesService.findOne(+id);
    }

<<<<<<< HEAD

=======
>>>>>>> 57f3cfb81deb675ec27c036a3198895535f7f3db
    @Get('statistics/year/:year')
    async getStatisticsByYear(@Param('year') year: number): Promise<Candidate[]> {
    return this.candidatesService.getStatisticsByYear(year);
    }
<<<<<<< HEAD
    

=======
>>>>>>> 57f3cfb81deb675ec27c036a3198895535f7f3db

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCandidateDto: CreateCandidateDto): Promise<Candidate> {
        return this.candidatesService.update(+id, updateCandidateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.candidatesService.remove(+id);
    }
}

