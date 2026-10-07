import { Controller, Get, Query } from '@nestjs/common';
import { TaxService } from './tax.service.js';
import { TaxDTO } from './dto/tax.dto.js';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Get()
  async CalculateTax(@Query() dto: TaxDTO) {
    return this.taxService.CalculateTax(dto)
  }
}
