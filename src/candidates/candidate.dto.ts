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

    // Valider si recruited est false
    @ValidateIf((o) => !o.recruited)
    validateRecruitmentYear(value: number): boolean {
        if (value !== null && value !== undefined) {
            throw new Error(
                `recruitmentYear must be null when recruited is false`
            );
        }
        return true; // Validation réussie si la condition est remplie
    }
}
