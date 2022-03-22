import { ClientModule } from './../client/client.module';
import { CoachModule } from './../coach/coach.module';
import { UsersModule } from './../users/users.module';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from './../../prisma/prisma.service';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UsersModule, CoachModule, ClientModule],
  providers: [AuthService, PrismaService, AuthResolver]
})
export class AuthModule {}
