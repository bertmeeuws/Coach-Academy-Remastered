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
} from '@nestjs/graphql';
import { ClientService } from './client.service';
import { ClientCreateInput } from '../@generated/prisma-nestjs-graphql/client/client-create.input';
import { ClientUpdateInput } from '../@generated/prisma-nestjs-graphql/client/client-update.input';
import { Client } from 'src/@generated/prisma-nestjs-graphql/client/client.model';

@Resolver('Client')
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation('createClient')
  create(@Args('createClientInput') createClientInput: ClientCreateInput) {
    return this.clientService.create(createClientInput);
  }

  @Query('clients')
  findAll() {
    return this.clientService.findAll();
  }

  @Query('client')
  findOne(@Args('id') id: number) {
    return this.clientService.findOne(id);
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
