import { Injectable } from '@nestjs/common';
import { DietplanCreateInput } from 'src/@generated/prisma-nestjs-graphql/dietplan/dietplan-create.input';



@Injectable()
export class MealplanService{
  create(createDietInput: DietplanCreateInput) {
    return 'This action adds a new diet';
  }

  findAll() {
    return `This action returns all diet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diet`;
  }

  /*
  update(id: number, updateDietInput: UpdateDietInput) {
    return `This action updates a #${id} diet`;
  }
  */

  remove(id: number) {
    return `This action removes a #${id} diet`;
  }
}
