import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CoachService } from './coach.service';
import { CoachCreateInput } from '../@generated/prisma-nestjs-graphql/coach/coach-create.input';
import { CoachUpdateInput } from '../@generated/prisma-nestjs-graphql/coach/coach-update.input';

@Resolver('Coach')
export class CoachResolver {
  constructor(private readonly coachService: CoachService) {}

  @Query('coach')
  findAll() {
    return this.coachService.findAll();
  }

  @Query('coach')
  findOne(@Args('id') id: number) {
    return this.coachService.findOne(id);
  }

  @Mutation('updateCoach')
  update(@Args('updateCoachInput') updateCoachInput: CoachUpdateInput) {
    //return this.coachService.update(updateCoachInput.id, updateCoachInput);
  }

  @Mutation('removeCoach')
  remove(@Args('id') id: number) {
    return this.coachService.remove(id);
  }
}
