import { Body, Controller, Param, Post } from '@nestjs/common';
import { BillsService } from './bills.service.js';
import { BillsDTO, BillsParamsDTO } from './dto/bills.dto.js';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post(':peopleCount/split')
  split(@Param() params: BillsParamsDTO, @Body() dto: BillsDTO) {
    return this.billsService.splitBill(params, dto);
  }
}
