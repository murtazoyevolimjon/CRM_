import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceDetailsResolver } from './attendance-details.resolver';
import { AttendanceDetailsService } from './attendance-details.service';

describe('AttendanceDetailsResolver', () => {
  let resolver: AttendanceDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceDetailsResolver, AttendanceDetailsService],
    }).compile();

    resolver = module.get<AttendanceDetailsResolver>(AttendanceDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
