import { Module } from '@nestjs/common';
import { StudentGroupsService } from './student-groups.service';
import { StudentGroupsResolver } from './student-groups.resolver';

@Module({
  providers: [StudentGroupsResolver, StudentGroupsService],
})
export class StudentGroupsModule {}
