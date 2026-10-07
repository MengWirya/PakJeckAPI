import { Type } from 'class-transformer';
import { IsIn, IsNumber, IsString, Max, Min } from 'class-validator';

export class TemperatureParamsDTO {
  @Type(() => Number)
  @IsNumber()
  @Min(-273.15)
  @Max(1000)
  value: number;
}

export class TemperatureQueryDTO {
  @IsString()
  @IsIn(['C', 'F', 'K'])
  from: string;

  @IsString()
  @IsIn(['C', 'F', 'K'])
  to: string;
}
