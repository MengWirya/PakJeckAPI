import { Body, Controller, Post } from '@nestjs/common';
import { ElectricityService } from './electricity.service.js';
import { ElectricityDTO } from './dto/electricity.dto.js';

@Controller('bills')
export class ElectricityController {
  constructor(private readonly electricityService: ElectricityService) {}

  @Post('electricity')
  calculate(@Body() dto: ElectricityDTO) {
    return this.electricityService.calculate(dto);
  }
}
