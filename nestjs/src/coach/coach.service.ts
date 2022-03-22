import { UsersService } from 'src/users/users.service';
import { CreateCoachInput } from './../graphql';
import { Injectable } from '@nestjs/common';
import { CoachUpdateInput } from '../@generated/prisma-nestjs-graphql/coach/coach-update.input';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class CoachService {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService
  ) {}

  create(createCoachInput: CreateCoachInput) {
    return this.prisma.coach.create({
      data: createCoachInput
    });
  }

  findAll() {
    return `This action returns all coach`;
  }

  findOne(id: number) {
    return this.prisma.coach.findFirst({
      where: {
        id: id
      }
    });
  }

  findCoachByUserId(id: number) {
    return this.prisma.coach.findFirst({
      where: {
        userId: id
      }
    });
  }

  getUser(userId: number) {
    return this.userService.findOne(userId);
  }

  update(id: number, updateCoachInput: CoachUpdateInput) {
    return `This action updates a #${id} coach`;
  }

  remove(id: number) {
    return `This action removes a #${id} coach`;
  }
}
