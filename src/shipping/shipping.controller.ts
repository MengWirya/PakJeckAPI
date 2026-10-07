import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { ShippingService } from './shipping.service.js';
import { ShippingDTO, ShippingParamsDTO, ShippingQueryDTO } from './dto/shipping.dto.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post(':city')
  calculate(
    @Param() params: ShippingParamsDTO,
    @Query() query: ShippingQueryDTO,
    @Body() dto: ShippingDTO,
  ) {
    return this.shippingService.calculate(params, query, dto);
  }
}
