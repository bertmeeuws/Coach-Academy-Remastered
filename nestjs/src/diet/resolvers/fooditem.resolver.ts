import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FoodItemCreateInput } from 'src/@generated/prisma-nestjs-graphql/food-item/food-item-create.input';
import { MealCreateInput } from 'src/@generated/prisma-nestjs-graphql/meal/meal-create.input';
import { FoodItemService } from '../services/fooditem.service';
import { MealService } from '../services/meal.service';

@Resolver('Meal')
export class MealResolver {
  constructor(private readonly _foodItemService: FoodItemService) {}

  @Mutation('createFoodItem')
  create(@Args('createFoodItem') createFoodItem: FoodItemCreateInput) {
    this._foodItemService.create(createFoodItem);
  }

  @Query('fooditems')
  findAll() {
    return this._foodItemService.findAll();
  }

  @Query('fooditem')
  findOne(@Args('id') id: string) {
    return this._foodItemService.findOne(id);
  }
}
