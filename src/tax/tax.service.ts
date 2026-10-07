import { Injectable, Query } from '@nestjs/common';
import { TaxDTO } from './dto/tax.dto.js';

@Injectable()
export class TaxService {
    CalculateTax(dto: TaxDTO) {
        const tax = dto.amount * (dto.rate/100)
        const inclusive = dto.inclusive === "true" ? true : false
        
        return {
            succes: true,
            message: "Tax Calculated",
            data: {
                amount: dto.amount,
                rate: dto.rate,
                inclusive: inclusive ? "True" : "False",
                tax: tax,
                net: inclusive ? dto.amount - tax : dto.amount, 
                gross: inclusive ? dto.amount : dto.amount + tax
            }
        }
    }
}
