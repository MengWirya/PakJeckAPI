import { Injectable } from '@nestjs/common';
import { ParkingParamsDTO, ParkingQueryDTO } from './dto/parking.dto.js';

@Injectable()
export class ParkingService {
	calculate(params: ParkingParamsDTO, query: ParkingQueryDTO) {
		const hourlyRates: Record<string, number> = {
			motorcycle: 2000,
			car: 8000,
			bus: 15000,
		};
		const billedHours = Math.ceil(params.hours);
		const weekendSurcharge = query.weekend ? 0.2 : 0;
		const hourlyRate = hourlyRates[query.vehicle];
		const total = billedHours * hourlyRate * (1 + weekendSurcharge);

		return {
			success: true,
			message: 'Parking fee calculated',
			data: {
				hours: params.hours,
				billedHours,
				vehicle: query.vehicle,
				weekend: query.weekend,
				hourlyRate,
				weekendSurcharge,
				total,
			},
		};
	}
}
