import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import { Candidate } from './candidates.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Candidate])], // Ajoutez cette ligne
    providers: [CandidatesService],
    controllers: [CandidatesController],
})
export class CandidatesModule {}