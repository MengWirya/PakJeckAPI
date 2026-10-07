import { Transform, Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min, ValidateNested } from 'class-validator';

export class CheckoutItemDTO {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsInt()
  @Min(1)
  qty: number;
}

export class CheckoutQueryDTO {
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  member: boolean = false;

  @IsOptional()
  @IsString()
  coupon?: string;
}

export class CheckoutDTO {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDTO)
  items: CheckoutItemDTO[];
}
