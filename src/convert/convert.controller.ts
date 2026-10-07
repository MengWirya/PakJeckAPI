import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { ConvertDTO } from './dto/convert.dto.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) { }

  @Get('length/:meters')
  ConvertMeter(@Param() dto: ConvertDTO) {
    return this.convertService.convertMeters(dto)
  }
}
