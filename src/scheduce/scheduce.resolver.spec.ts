import { Test, TestingModule } from '@nestjs/testing';
import { ScheduceResolver } from './scheduce.resolver';
import { ScheduceService } from './scheduce.service';

describe('ScheduceResolver', () => {
  let resolver: ScheduceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduceResolver, ScheduceService],
    }).compile();

    resolver = module.get<ScheduceResolver>(ScheduceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
