import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Scheduce {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
