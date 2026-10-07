import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvertModule } from './convert/convert.module.js';
import { TaxModule } from './tax/tax.module.js';
import { ScoresModule } from './scores/scores.module.js';
import { BillsModule } from './bills/bills.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { CheckoutModule } from './checkout/checkout.module.js';
import { LoansModule } from './loans/loans.module.js';
import { ElectricityModule } from './electricity/electricity.module.js';
import { ParkingModule } from './parking/parking.module.js';
import { ShippingModule } from './shipping/shipping.module.js';

@Module({
  imports: [ConvertModule, TaxModule, ScoresModule, BillsModule, TemperatureModule, CheckoutModule, LoansModule, ElectricityModule, ParkingModule, ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
