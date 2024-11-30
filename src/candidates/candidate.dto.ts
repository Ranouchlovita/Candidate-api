import { IsEmail, IsNotEmpty, IsBoolean, IsOptional, IsArray, IsString, IsNumber } from 'class-validator';

export class CreateCandidateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsArray()
    skills: string[];

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsBoolean()
    recruited: boolean;

    @IsOptional()
    @IsNumber()
    recruitmentYear?: number; // Assurez-vous que ce champ est ici
}