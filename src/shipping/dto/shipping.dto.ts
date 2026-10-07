import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';

export class ShippingParamsDTO {
  @IsString()
  @IsNotEmpty()
  city: string;
}

export class ShippingQueryDTO {
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  express: boolean = false;

  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  insurance: boolean = false;
}

export class DimensionDTO {
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  lengthCm: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  widthCm: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  heightCm: number;
}

export class ShippingDTO {
  @Type(() => Number)
  @IsNumber()
  @Min(0.1)
  @Max(30)
  weightKg: number;

  @ValidateNested()
  @Type(() => DimensionDTO)
  dimension: DimensionDTO;
}
