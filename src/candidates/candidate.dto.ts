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

    // Valider uniquement si recruited est true
    @ValidateIf((o) => o.recruited)
    @IsNotEmpty({ message: 'recruitmentYear is required when recruited is true' })
    @IsNumber()
    recruitmentYear?: number;

    // Valider si status est "en attente"
    @ValidateIf((o) => o.status === 'en attente')
    validateRecruitmentYear(value: number): boolean {
        if (value !== null && value !== undefined) {
            throw new Error(
                `recruitmentYear is not allowed when status is 'en attente'`
            );
        }
        return true; // Validation réussie si la condition est remplie
    }
}
