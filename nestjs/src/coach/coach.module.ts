import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachResolver } from './coach.resolver';

@Module({
  providers: [CoachResolver, CoachService]
})
export class CoachModule {}
