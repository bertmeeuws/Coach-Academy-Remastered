import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateInviteInput, UpdateInviteInput } from 'src/graphql';

@Injectable()
export class InviteService {
  constructor(private prisma: PrismaService) {}

  create(coachId: number) {
    console.log(coachId);
    return this.prisma.invite.create({
      data: {
        coachId: coachId,
      },
    });
  }

  findAll() {
    return `This action returns all invite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invite`;
  }

  update(id: number, updateInviteInput: UpdateInviteInput) {
    return `This action updates a #${id} invite`;
  }

  remove(id: number) {
    return `This action removes a #${id} invite`;
  }
}
