import { Injectable } from '@nestjs/common';
import { BillsDTO, BillsParamsDTO } from './dto/bills.dto.js';

@Injectable()
export class BillsService {
	splitBill(params: BillsParamsDTO, dto: BillsDTO) {
		const subtotal = dto.items.reduce((sum, item) => sum + item.price * item.qty, 0);
		const tip = subtotal * (dto.tipPercent / 100);
		const total = subtotal + tip;

		return {
			success: true,
			message: 'Bill split',
			data: {
				peopleCount: params.peopleCount,
				subtotal,
				tipPercent: dto.tipPercent,
				tip,
				total,
				perPerson: Math.round(total / params.peopleCount),
			},
		};
	}
}
