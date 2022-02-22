import { Injectable } from '@nestjs/common';
import { CoachCreateInput } from '../@generated/prisma-nestjs-graphql/coach/coach-create.input';
import { CoachUpdateInput } from '../@generated/prisma-nestjs-graphql/coach/coach-update.input';

@Injectable()
export class CoachService {
  create(createCoachInput: CoachCreateInput) {
    return 'This action adds a new coach';
  }

  findAll() {
    return `This action returns all coach`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coach`;
  }

  update(id: number, updateCoachInput: CoachUpdateInput) {
    return `This action updates a #${id} coach`;
  }

  remove(id: number) {
    return `This action removes a #${id} coach`;
  }
}
