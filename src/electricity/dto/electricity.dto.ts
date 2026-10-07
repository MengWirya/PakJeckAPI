import { Transform, Type } from 'class-transformer';
import { IsNumber, IsString, IsNotEmpty, Length, Max, Min, ValidateNested } from 'class-validator';

export class MeterDTO {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  previousKwh: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  currentKwh: number;
}

export class RatesDTO {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  baseFee: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  perKwh: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(20)
  taxRate: number = 11;
}

export class ElectricityDTO {
  @IsString()
  @IsNotEmpty()
  @Length(3, 80)
  @Transform(({ value }) => value.trim())
  customerName: string;

  @ValidateNested()
  @Type(() => MeterDTO)
  meter: MeterDTO;

  @ValidateNested()
  @Type(() => RatesDTO)
  rates: RatesDTO;
}
