import { AuthGuard } from '../auth/guards/auth.gql.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetCoachId } from 'src/auth/decorators/getuserid.decorator';
import { CreateInviteInput, Invite, UpdateInviteInput } from 'src/graphql';
import { InviteService } from './invite.service';

@Resolver('Invite')
export class InviteResolver {
  constructor(private readonly inviteService: InviteService) {}

  //@TODO Add role guard instead of login guard
  @UseGuards(AuthGuard)
  @Mutation('createInvite')
  async create(@GetCoachId() coachId: number) {
    console.log(coachId);

    return this.inviteService.create(coachId);
  }

  @Query('invite')
  findAll() {
    return this.inviteService.findAll();
  }

  @Query('invite')
  findOne(@Args('id') id: number) {
    return this.inviteService.findOne(id);
  }

  @Mutation('updateInvite')
  update(@Args('updateInviteInput') updateInviteInput: UpdateInviteInput) {
    return this.inviteService.update(updateInviteInput.id, updateInviteInput);
  }

  @Mutation('removeInvite')
  remove(@Args('id') id: number) {
    return this.inviteService.remove(id);
  }
}
