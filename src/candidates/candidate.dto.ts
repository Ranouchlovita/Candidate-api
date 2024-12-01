import {
    IsNotEmpty,
    IsString,
    IsEmail,
    IsBoolean,
    IsOptional,
    IsArray,
    IsNumber,
    ArrayNotEmpty,
    ValidateIf,
    ValidationArguments,
} from 'class-validator';

export class CreateCandidateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
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