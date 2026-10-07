import { Injectable } from '@nestjs/common';
import { ScoresDTO } from './dto/scores.dto.js';

@Injectable()
export class ScoresService {
    CheckScore(dto: ScoresDTO) {
        let passed = 0
        let failed = 0
        let total = 0
        let highest = -Infinity
        let lowest = Infinity
        for (const data of dto.scores) {
            total += data
            data >= dto.passMark ? passed++ : failed++
            highest = data > highest ? data : highest
            lowest = data < lowest ? data : lowest
        }
        let average = total / dto.scores.length

        return {
            succes: true,
            message: "Score summary calculated",
            data: {
                count: dto.scores.length,
                average: average,
                highest: highest,
                lowest: lowest,
                passMark: dto.passMark,
                passed: passed,
                failed: failed,
            }
        }
    }
}