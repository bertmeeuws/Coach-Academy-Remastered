import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DietplanCreateInput } from 'src/@generated/prisma-nestjs-graphql/dietplan/dietplan-create.input';
import { MealCreateInput } from 'src/@generated/prisma-nestjs-graphql/meal/meal-create.input';

@Injectable()
export class MealService {
  constructor(private _prisma: PrismaService) {}

  create(createMealInput: MealCreateInput) {
    return this._prisma.meal.create({
      data: createMealInput
    });
  }

  findAll() {
    return this._prisma.meal.findMany();
  }

  findOne(id: string) {
    return this._prisma.meal.findUnique({
      where: {
        id
      }
    });
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
