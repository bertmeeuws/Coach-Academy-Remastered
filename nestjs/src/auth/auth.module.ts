import { PrismaService } from './../../prisma/prisma.service';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthService, PrismaService, AuthResolver],
})
export class AuthModule {}
