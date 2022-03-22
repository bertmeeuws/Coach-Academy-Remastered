import { MinioClientService } from './../minio-client/minio-client.service';
import {
  GetClientId,
  GetCoachId,
  isUserCoach
} from './../auth/decorators/getuserid.decorator';
import { Req, Session, UseGuards, UseInterceptors } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Context
} from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from 'src/@generated/prisma-nestjs-graphql/client/client.model';
import { MyContext } from 'src/types/my-context';
import { AuthGuard } from 'src/auth/guards/auth.gql.guard';
import { CreateClientInput, UpdateClientInput, Upload } from 'src/graphql';
import { GetUserId } from 'src/auth/decorators/getuserid.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Resolver('Client')
export class ClientResolver {
  constructor(
    private readonly clientService: ClientService,
    private minioClientService: MinioClientService
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
    @Args('filter') filter: string
  ) {
    return this.clientService.findAll(coachId, filter);
  }

  @UseGuards(AuthGuard)
  @Query('client')
  findOne(
    @Args('id') clientId: number,
    @GetCoachId() coachId: number,
    @GetClientId() id: number,
    @isUserCoach() isCoach: boolean,
    @Context() context
  ) {
    console.log(clientId);
    if (isCoach) {
      return this.clientService.findOneAsCoach(clientId, coachId);
    }

    if (clientId) {
      return this.clientService.findOne(id);
    }
    return this.clientService.findOne(id);
    console.log(context.req.session);
    return this.clientService.findOne(clientId);
  }

  @UseGuards(AuthGuard)
  @Query('getClientInformation')
  getClientInformation(@GetClientId() client_id: number) {
    return this.clientService.getUser(client_id);
  }

  @ResolveField()
  user(@Parent() client: Client) {
    return this.clientService.getUser(client.userId);
  }

  //@Todo add email
  @UseGuards(AuthGuard)
  @Mutation('updateClient')
  async update(
    @Args('updateClientInput') updateClientInput: UpdateClientInput,
    @GetClientId() client_id: number
  ) {
    //console.log(updateClientInput, client_id)
    await this.clientService.update(client_id, updateClientInput);
    return true;
  }

  @Mutation('removeClient')
  remove(@Args('id') id: number) {
    return this.clientService.remove(id);
  }

  @Mutation('fileUpload')
  async file(@Args('file') upload: Upload) {
    const uploaded_image = await this.minioClientService.upload(upload);
    console.log(uploaded_image);

    return true;
  }
}
