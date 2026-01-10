import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateScheduceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
