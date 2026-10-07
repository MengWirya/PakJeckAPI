import { Module } from '@nestjs/common';
import { ElectricityService } from './electricity.service.js';
import { ElectricityController } from './electricity.controller.js';

@Module({
  controllers: [ElectricityController],
  providers: [ElectricityService],
})
export class ElectricityModule {}
