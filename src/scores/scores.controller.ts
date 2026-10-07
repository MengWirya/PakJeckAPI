import { Body, Controller, Post } from '@nestjs/common';
import { ScoresService } from './scores.service.js';
import { ScoresDTO } from './dto/scores.dto.js';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post('average')
  CheckScores(@Body() dto: ScoresDTO) {
    return this.scoresService.CheckScore(dto)
  }
}
