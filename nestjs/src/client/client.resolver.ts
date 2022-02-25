import {
  GetCoachId,
  isUserCoach,
} from './../auth/decorators/getuserid.decorator';
import { Req, Session, UseGuards } from '@nestjs/common';
import { User } from './../@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './../users/users.service';
import { PrismaService } from './../../prisma/prisma.service';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Context,
} from '@nestjs/graphql';
import { ClientService } from './client.service';
import { ClientUpdateInput } from '../@generated/prisma-nestjs-graphql/client/client-update.input';
import { Client } from 'src/@generated/prisma-nestjs-graphql/client/client.model';
import { Request } from 'express';
import { MyContext } from 'src/types/my-context';
import { AuthGuard } from 'src/auth/guards/auth.gql.guard';
import { CreateClientInput } from 'src/graphql';
import { GetUserId } from 'src/auth/decorators/getuserid.decorator';

@Resolver('Client')
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation('createClient')
  create(@Args('createClientInput') createClientInput: CreateClientInput) {
    return this.clientService.create(createClientInput);
  }

  @Query('clients')
  @UseGuards(AuthGuard)
  findAll(
    @Context() ctx: MyContext,
    @GetUserId() userId: number,
    @GetCoachId() coachId: number,
    @Args('filter') filter: string,
  ) {
    return this.clientService.findAll(coachId, filter);
  }

  @UseGuards(AuthGuard)
  @Query('client')
  findOne(
    @Args('id') clientId: number,
    @GetCoachId() coachId: number,
    @isUserCoach() isCoach: boolean,
  ) {
    if (isCoach) {
      return this.clientService.findOneAsCoach(clientId, coachId);
    }
    return this.clientService.findOne(clientId);
  }

  @ResolveField()
  user(@Parent() client: Client) {
    return this.clientService.getUser(client.userId);
  }

  /*
  @Mutation('updateClient')
  update(@Args('updateClientInput') updateClientInput: UpdateClientInput) {
    return this.clientService.update(updateClientInput.id, updateClientInput);
  }
  */

  @Mutation('removeClient')
  remove(@Args('id') id: number) {
    return this.clientService.remove(id);
  }
}
