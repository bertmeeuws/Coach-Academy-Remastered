import { MinioClientService } from './../minio-client/minio-client.service';
import {
  GetClientId,
  GetCoachId,
  isUserCoach,
} from './../auth/decorators/getuserid.decorator';
import { Req, Session, UseGuards } from '@nestjs/common';
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
import { Client } from 'src/@generated/prisma-nestjs-graphql/client/client.model';
import { MyContext } from 'src/types/my-context';
import { AuthGuard } from 'src/auth/guards/auth.gql.guard';
import { CreateClientInput } from 'src/graphql';
import { GetUserId } from 'src/auth/decorators/getuserid.decorator';

@Resolver('Client')
export class ClientResolver {
  constructor(
    private readonly clientService: ClientService,
    private minioClientService: MinioClientService,
  ) {}

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
    console.log(this.minioClientService.test());
    return this.clientService.findAll(coachId, filter);
  }

  @UseGuards(AuthGuard)
  @Query('client')
  findOne(
    @Args('id') clientId: number,
    @GetCoachId() coachId: number,
    @GetClientId() id: number,
    @isUserCoach() isCoach: boolean,
  ) {
    if (isCoach) {
      return this.clientService.findOneAsCoach(clientId, coachId);
    }
    return this.clientService.findOne(clientId);
  }

  @UseGuards(AuthGuard)
  @Query('getClientInformation')
  getClientInformation(@GetClientId() client_id: number){
    return this.clientService.getUser(client_id)
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
