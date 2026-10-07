import { Transform, Type } from 'class-transformer';
import { IsIn, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class ParkingParamsDTO {
  @Type(() => Number)
  @IsNumber()
  @Min(0.5)
  @Max(24)
  hours: number;
}

export class ParkingQueryDTO {
  @IsIn(['car', 'motorcycle', 'bus'])
  vehicle: string;

  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  weekend: boolean = false;
}
