import { Module } from '@nestjs/common';
import { ScheduceService } from './scheduce.service';
import { ScheduceResolver } from './scheduce.resolver';

@Module({
  providers: [ScheduceResolver, ScheduceService],
})
export class ScheduceModule {}
