import { Test, TestingModule } from '@nestjs/testing';
import { ElectricityController } from './electricity.controller.js';
import { ElectricityService } from './electricity.service.js';

describe('ElectricityController', () => {
  let controller: ElectricityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectricityController],
      providers: [ElectricityService],
    }).compile();

    controller = module.get<ElectricityController>(ElectricityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
