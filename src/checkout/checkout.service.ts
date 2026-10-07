import { Injectable, NotFoundException } from '@nestjs/common';
import { CheckoutDTO, CheckoutQueryDTO } from './dto/checkout.dto.js';

@Injectable()
export class CheckoutService {
	calculate(query: CheckoutQueryDTO, dto: CheckoutDTO) {
		const supportedCoupons: Record<string, number> = {
			HEMAT10: 0.1,
			HEMAT20: 0.2,
			FREESHIP: 0,
		};

		if (query.coupon && !(query.coupon in supportedCoupons)) {
			throw new NotFoundException({
				success: false,
				message: `Coupon '${query.coupon}' is not supported`,
				errors: [],
			});
		}

		const subtotal = dto.items.reduce((sum, item) => sum + item.price * item.qty, 0);
		const memberDiscount = query.member ? subtotal * 0.05 : 0;
		const couponDiscount = query.coupon ? subtotal * supportedCoupons[query.coupon] : 0;

		return {
			success: true,
			message: 'Checkout calculated',
			data: {
				subtotal,
				member: query.member,
				coupon: query.coupon,
				discounts: {
					member: memberDiscount,
					coupon: couponDiscount,
					total: memberDiscount + couponDiscount,
				},
				grandTotal: subtotal - memberDiscount - couponDiscount,
			},
		};
	}
}
