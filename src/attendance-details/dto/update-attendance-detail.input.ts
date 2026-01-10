import { CreateAttendanceDetailInput } from './create-attendance-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttendanceDetailInput extends PartialType(CreateAttendanceDetailInput) {
  @Field(() => Int)
  id: number;
}
