import { UsersModule } from './../users/users.module';
import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';

@Module({
  imports: [UsersModule],
  providers: [ClientResolver, ClientService, PrismaService],
})
export class ClientModule {}
