import { Injectable } from '@nestjs/common';
import { CreateScheduceInput } from './dto/create-scheduce.input';
import { UpdateScheduceInput } from './dto/update-scheduce.input';

@Injectable()
export class ScheduceService {
  create(createScheduceInput: CreateScheduceInput) {
    return 'This action adds a new scheduce';
  }

  findAll() {
    return `This action returns all scheduce`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduce`;
  }

  update(id: number, updateScheduceInput: UpdateScheduceInput) {
    return `This action updates a #${id} scheduce`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduce`;
  }
}
