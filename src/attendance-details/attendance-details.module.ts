import { Module } from '@nestjs/common';
import { AttendanceDetailsService } from './attendance-details.service';
import { AttendanceDetailsResolver } from './attendance-details.resolver';

@Module({
  providers: [AttendanceDetailsResolver, AttendanceDetailsService],
})
export class AttendanceDetailsModule {}
