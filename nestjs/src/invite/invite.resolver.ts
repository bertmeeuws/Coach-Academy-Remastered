import { AuthGuard } from '../auth/guards/auth.gql.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { GetClientId, GetCoachId } from 'src/auth/decorators/getuserid.decorator';
import { CreateInviteInput, UpdateInviteInput } from 'src/graphql';
import { InviteService } from './invite.service';
import { ClientService } from 'src/client/client.service';
import {Invite} from "../@generated/prisma-nestjs-graphql/invite/invite.model"
import { CoachService } from 'src/coach/coach.service';

@Resolver('Invite')
export class InviteResolver {
  constructor(private readonly _inviteService: InviteService, private readonly _clientService: ClientService, private readonly _coachService: CoachService) {}

  //@TODO Add role guard instead of login guard
  @UseGuards(AuthGuard)
  @Mutation('createInvite')
  async create(@GetCoachId() coachId: number) {
    return this._inviteService.create(coachId);
  }

  @Query('invites')
  findAll() {
    return this._inviteService.findAll();
  }

  @Query('invite')
  findOne(@Args('id') id: string) {
    console.log(id)
    return this._inviteService.findOne(id);
  }


  @ResolveField()
  coach(@Parent() invite: Invite) {
    return this._coachService.findOne(invite.coachId);
  }

  @ResolveField()
  client(@Parent() invite: any) {
    return this._clientService.findOne(invite.clientId);
  }



  @Mutation('updateInvite')
  update(@Args('updateInviteInput') updateInviteInput: UpdateInviteInput) {
    return this._inviteService.update(updateInviteInput.id, updateInviteInput);
  }

  @Mutation('removeInvite')
  remove(@Args('id') id: number) {
    return this._inviteService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Mutation('invalidateInvite')
  invalidateInvite(@Args('invite_id') id: string, @GetClientId() client_id: number) {
    console.log(id)
    console.log(client_id)
    return this._inviteService.invalidateInvite(id, client_id);
  }
}
