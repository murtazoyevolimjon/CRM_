import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ScheduceService } from './scheduce.service';
import { Scheduce } from './entities/scheduce.entity';
import { CreateScheduceInput } from './dto/create-scheduce.input';
import { UpdateScheduceInput } from './dto/update-scheduce.input';

@Resolver(() => Scheduce)
export class ScheduceResolver {
  constructor(private readonly scheduceService: ScheduceService) {}

  @Mutation(() => Scheduce)
  createScheduce(@Args('createScheduceInput') createScheduceInput: CreateScheduceInput) {
    return this.scheduceService.create(createScheduceInput);
  }

  @Query(() => [Scheduce], { name: 'scheduce' })
  findAll() {
    return this.scheduceService.findAll();
  }

  @Query(() => Scheduce, { name: 'scheduce' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.scheduceService.findOne(id);
  }

  @Mutation(() => Scheduce)
  updateScheduce(@Args('updateScheduceInput') updateScheduceInput: UpdateScheduceInput) {
    return this.scheduceService.update(updateScheduceInput.id, updateScheduceInput);
  }

  @Mutation(() => Scheduce)
  removeScheduce(@Args('id', { type: () => Int }) id: number) {
    return this.scheduceService.remove(id);
  }
}
