import { CoachModule } from './../coach/coach.module';
import { ClientModule } from './../client/client.module';
import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';
import { InviteResolver } from './invite.resolver';

@Module({
  imports: [ClientModule, CoachModule],
  providers: [InviteResolver, InviteService, PrismaService]
})
export class InviteModule {}
