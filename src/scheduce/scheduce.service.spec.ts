import { Test, TestingModule } from '@nestjs/testing';
import { ScheduceService } from './scheduce.service';

describe('ScheduceService', () => {
  let service: ScheduceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduceService],
    }).compile();

    service = module.get<ScheduceService>(ScheduceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
