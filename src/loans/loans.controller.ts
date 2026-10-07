import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { LoansService } from './loans.service.js';
import { LoansDTO, LoansParamsDTO, LoansQueryDTO } from './dto/loans.dto.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post(':principal/installment')
  calculate(
    @Param() params: LoansParamsDTO,
    @Query() query: LoansQueryDTO,
    @Body() dto: LoansDTO,
  ) {
    return this.loansService.calculate(params, query, dto);
  }
}
