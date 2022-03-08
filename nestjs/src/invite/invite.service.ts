import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateInviteInput, UpdateInviteInput } from 'src/graphql';

@Injectable()
export class InviteService {
  constructor(private _prisma: PrismaService) {}

  create(coachId: number) {
   
    return this._prisma.invite.create({
      data: {
        coachId: coachId,
      },
    });
  }

  findAll() {
    return this._prisma.invite.findMany()
  }

  findOne(id: string) {
    return this._prisma.invite.findFirst({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateInviteInput: UpdateInviteInput) {
    return `This action updates a #${id} invite`;
  }

  remove(id: number) {
    return `This action removes a #${id} invite`;
  }

  async invalidateInvite(invite_id: string, client_id: number){
    //aka use invite
    const invite = await this._prisma.invite.findFirst({
      where: {
        id: invite_id
      }
    })


    await this._prisma.client.update({
      where: {
        id: client_id
      },
      data: {
        inviteId: invite_id,
        coachId: invite.coachId
      }
    })

    await this._prisma.invite.update({
      where: {
        id: invite_id
      },
      data: {
        invalidated: new Date()
      }
    })
    
    return true
  }
}
