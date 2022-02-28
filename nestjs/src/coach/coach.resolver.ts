import { UsersService } from 'src/users/users.service';
import { Coach } from '../@generated/prisma-nestjs-graphql/coach/coach.model';
import { GetCoachId } from 'src/auth/decorators/getuserid.decorator';
import { AuthGuard } from 'src/auth/guards/auth.gql.guard';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CoachService } from './coach.service';
import { CoachCreateInput } from '../@generated/prisma-nestjs-graphql/coach/coach-create.input';
import { CoachUpdateInput } from '../@generated/prisma-nestjs-graphql/coach/coach-update.input';
import { UseGuards } from '@nestjs/common';

@Resolver('Coach')
export class CoachResolver {
  constructor(private readonly coachService: CoachService) {}

  @UseGuards(AuthGuard)
  @Query('coach')
  findAll() {
    return this.coachService.findAll();
  }

  @UseGuards(AuthGuard)
  @Query('coach')
  findOne(@GetCoachId() coachId: number) {
    if (coachId) {
      return this.coachService.findOne(coachId);
    }
  }

  @ResolveField()
  user(@Parent() coach: Coach) {
    return this.coachService.getUser(coach.userId);
  }

  @UseGuards(AuthGuard)
  @Mutation('updateCoach')
  update(@Args('updateCoachInput') updateCoachInput: CoachUpdateInput) {
    //return this.coachService.update(updateCoachInput.id, updateCoachInput);
  }

  @Mutation('removeCoach')
  remove(@Args('id') id: number) {
    return this.coachService.remove(id);
  }
}
