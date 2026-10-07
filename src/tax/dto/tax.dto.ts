import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, Max, Min, IsOptional, IsString } from "class-validator";


export class TaxDTO {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    amount: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    rate: number

    @IsOptional()
    @IsString()
    @Transform(({ value }) => value === 'true' ? "true" : "false")
    inclusive?: string
}