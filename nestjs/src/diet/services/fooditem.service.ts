import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DietplanCreateInput } from 'src/@generated/prisma-nestjs-graphql/dietplan/dietplan-create.input';
import { FoodItemCreateInput } from 'src/@generated/prisma-nestjs-graphql/food-item/food-item-create.input';
import { MealCreateInput } from 'src/@generated/prisma-nestjs-graphql/meal/meal-create.input';



@Injectable()
export class FoodItemService {
  constructor(private _prisma: PrismaService){}


  create(createMealInput: FoodItemCreateInput) {
    return this._prisma.foodItem.create({
        data: createMealInput
    })
}

  findAll() {
    return this._prisma.foodItem.findMany()
  }

  findOne(id: string) {
    return this._prisma.foodItem.findUnique({
        where: {
            id
        }
    })
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
