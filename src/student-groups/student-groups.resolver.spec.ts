import { Test, TestingModule } from '@nestjs/testing';
import { StudentGroupsResolver } from './student-groups.resolver';
import { StudentGroupsService } from './student-groups.service';

describe('StudentGroupsResolver', () => {
  let resolver: StudentGroupsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentGroupsResolver, StudentGroupsService],
    }).compile();

    resolver = module.get<StudentGroupsResolver>(StudentGroupsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
