import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsNumber, Max, Min, ValidateNested } from "class-validator";

export class ScoresDTO {
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsNumber({}, { each: true })
    @Min(0, { each: true })
    @Max(100, { each: true })
    scores: number[]

    @IsNumber()
    @Min(0)
    passMark: number = 70
}