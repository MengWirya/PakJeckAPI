import { Body, Injectable, Post } from '@nestjs/common';
import { ConvertDTO } from './dto/convert.dto.js';

@Injectable()
export class ConvertService {
    convertMeters(dto: ConvertDTO) {
        return {
            succes: true,
            message: "Lenght Converted",
            data: {
                meters: dto.meters,
                kilometers: dto.meters / 1000,
                centimeters: dto.meters * 100,
                miles: Math.floor(dto.meters * 1609)
            }
        }
    }
}
