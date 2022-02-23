import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ClientCreateInput } from '../@generated/prisma-nestjs-graphql/client/client-create.input';
import { ClientUpdateInput } from '../@generated/prisma-nestjs-graphql/client/client-update.input';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ClientService {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  create(createClientInput: ClientCreateInput) {
    return this.prisma.client.create({
      data: createClientInput,
    });
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  getUser(userId) {
    return this.userService.findOne(userId);
  }

  update(id: number, updateClientInput: ClientUpdateInput) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
