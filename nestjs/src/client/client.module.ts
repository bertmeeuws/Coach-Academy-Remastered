import { MinioClientModule } from './../minio-client/minio-client.module';
import { MinioService } from 'nestjs-minio-client';
import { UsersModule } from './../users/users.module';
import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';

@Module({
  imports: [UsersModule, MinioClientModule],
  exports: [ClientService],
  providers: [ClientResolver, ClientService, PrismaService],
})
export class ClientModule {}
