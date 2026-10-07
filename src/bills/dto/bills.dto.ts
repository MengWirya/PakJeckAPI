import { Transform, Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsString, IsOptional, Length, Max, Min, ValidateNested } from 'class-validator';

export class BillItemDTO {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  @Transform(({ value }) => value.trim())
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsInt()
  @Min(1)
  qty: number;
}

export class BillsParamsDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(2)
  @Max(20)
  peopleCount: number;
}

export class BillsDTO {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(30)
  @ValidateNested({ each: true })
  @Type(() => BillItemDTO)
  items: BillItemDTO[];

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(30)
  tipPercent: number = 0;
}
