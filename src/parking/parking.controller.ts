import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParkingService } from './parking.service.js';
import { ParkingParamsDTO, ParkingQueryDTO } from './dto/parking.dto.js';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Get(':hours')
  calculate(@Param() params: ParkingParamsDTO, @Query() query: ParkingQueryDTO) {
    return this.parkingService.calculate(params, query);
  }
}
