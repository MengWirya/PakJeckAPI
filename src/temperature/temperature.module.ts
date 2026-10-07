import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { TemperatureController } from './temperature.controller.js';

@Module({
  controllers: [TemperatureController],
  providers: [TemperatureService],
})
export class TemperatureModule {}
