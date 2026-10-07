import { BadRequestException, Injectable } from '@nestjs/common';
import { TemperatureParamsDTO, TemperatureQueryDTO } from './dto/temperature.dto.js';

@Injectable()
export class TemperatureService {
	convert(params: TemperatureParamsDTO, query: TemperatureQueryDTO) {
		if (query.from === query.to) {
			throw new BadRequestException({
				success: false,
				message: 'Source and target units must be different',
				errors: [],
			});
		}

		const celsius = query.from === 'C'
			? params.value
			: query.from === 'F'
				? (params.value - 32) * 5 / 9
				: params.value - 273.15;
		const result = query.to === 'C'
			? celsius
			: query.to === 'F'
				? celsius * 9 / 5 + 32
				: celsius + 273.15;

		return {
			success: true,
			message: 'Temperature converted',
			data: {
				value: params.value,
				from: query.from,
				to: query.to,
				result: Math.round(result * 100) / 100,
			},
		};
	}
}
