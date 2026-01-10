import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceDetailsService } from './attendance-details.service';

describe('AttendanceDetailsService', () => {
  let service: AttendanceDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceDetailsService],
    }).compile();

    service = module.get<AttendanceDetailsService>(AttendanceDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
