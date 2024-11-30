import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column('simple-array')
    skills: string[];

    @Column()
    status: string;

    @Column()
    recruited: boolean;

    @Column({ nullable: true })
    recruitmentYear: number;
}