import { UsersModule } from './../users/users.module';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from './../../prisma/prisma.service';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UsersModule],
  providers: [AuthService, PrismaService, AuthResolver],
})
export class AuthModule {}
