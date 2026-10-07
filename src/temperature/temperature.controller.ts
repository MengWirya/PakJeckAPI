import { Controller, Get, Param, Query } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { TemperatureParamsDTO, TemperatureQueryDTO } from './dto/temperature.dto.js';

@Controller('convert/temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get(':value')
  convert(@Param() params: TemperatureParamsDTO, @Query() query: TemperatureQueryDTO) {
    return this.temperatureService.convert(params, query);
  }
}
