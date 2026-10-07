import { Body, Controller, Post, Query } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { CheckoutDTO, CheckoutQueryDTO } from './dto/checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('discount')
  calculate(@Query() query: CheckoutQueryDTO, @Body() dto: CheckoutDTO) {
    return this.checkoutService.calculate(query, dto);
  }
}
