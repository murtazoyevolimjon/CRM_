import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { GroupsModule } from './groups/groups.module';
import { CoursesModule } from './courses/courses.module';
import { LessonsModule } from './lessons/lessons.module';
import { PaymentsModule } from './payments/payments.module';
import { StudentGroupsModule } from './student-groups/student-groups.module';
import { StaffsModule } from './staffs/staffs.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AttendanceDetailsModule } from './attendance-details/attendance-details.module';
import { ScheduceModule } from './scheduce/scheduce.module';

@Module({
  imports: [StudentsModule, GroupsModule, CoursesModule, LessonsModule, PaymentsModule, StudentGroupsModule, StaffsModule, AttendanceModule, AttendanceDetailsModule, ScheduceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
