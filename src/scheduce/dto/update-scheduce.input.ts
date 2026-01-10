import { CreateScheduceInput } from './create-scheduce.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateScheduceInput extends PartialType(CreateScheduceInput) {
  @Field(() => Int)
  id: number;
}
