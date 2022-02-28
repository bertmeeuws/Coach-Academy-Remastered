import { UsersModule } from './../users/users.module';
import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachResolver } from './coach.resolver';

@Module({
  imports: [UsersModule],
  exports: [CoachService],
  providers: [CoachResolver, CoachService, PrismaService],
})
export class CoachModule {}
