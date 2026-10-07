import { Injectable, NotFoundException } from '@nestjs/common';
import { ShippingDTO, ShippingParamsDTO, ShippingQueryDTO } from './dto/shipping.dto.js';

@Injectable()
export class ShippingService {
	calculate(params: ShippingParamsDTO, query: ShippingQueryDTO, dto: ShippingDTO) {
		const baseFares: Record<string, number> = {
			jakarta: 9000,
			bandung: 12000,
			surabaya: 15000,
			medan: 18000,
			denpasar: 20000,
		};
		const baseFare = baseFares[params.city];

		if (baseFare === undefined) {
			throw new NotFoundException({
				success: false,
				message: `City '${params.city}' is not supported`,
				errors: [],
			});
		}

		const volumetricKg = dto.dimension.lengthCm
			* dto.dimension.widthCm
			* dto.dimension.heightCm / 5000;
		const chargeableKg = Math.max(dto.weightKg, volumetricKg);
		const weightExtra = Math.max(0, Math.ceil(chargeableKg - 1)) * 2000;
		const expressFee = query.express ? (baseFare + weightExtra) * 0.5 : 0;
		const insuranceFee = query.insurance ? chargeableKg * 1000 : 0;

		return {
			success: true,
			message: 'Shipping cost calculated',
			data: {
				city: params.city,
				express: query.express,
				insurance: query.insurance,
				weightKg: dto.weightKg,
				volumetricKg,
				chargeableKg,
				baseFare,
				expressFee,
				insuranceFee,
				total: baseFare + weightExtra + expressFee + insuranceFee,
			},
		};
	}
}
