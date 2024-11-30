import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatesModule } from './candidates/candidates.module';
import { Candidate } from './candidates/candidates.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.sqlite',
            entities: [Candidate],
            synchronize: true,
        }),
        CandidatesModule,
    ],
})
export class AppModule {}