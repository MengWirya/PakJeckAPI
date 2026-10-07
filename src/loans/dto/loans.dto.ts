import { Transform, Type } from 'class-transformer';
import { IsIn, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class LoansParamsDTO {
  @Type(() => Number)
  @IsNumber()
  @Min(1000000)
  @Max(1000000000)
  principal: number;
}

export class LoansQueryDTO {
  @IsOptional()
  @Transform(({ value }) => value ?? 'IDR')
  @IsIn(['IDR', 'USD'])
  currency: string = 'IDR';
}

export class LoansDTO {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(60)
  months: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(50)
  annualInterestRate: number;
}
