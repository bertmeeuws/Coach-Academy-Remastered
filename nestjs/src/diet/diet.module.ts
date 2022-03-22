import { Module } from '@nestjs/common';
import { MealPlanService } from './services/diet.service';
import { DietResolver } from './diet.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { FoodItemService } from './services/fooditem.service';
import { MealResolver } from './resolvers/meal.resolver';
import { MealService } from './services/meal.service';

@Module({
  providers: [
    DietResolver,
    MealResolver,
    MealPlanService,
    PrismaService,
    FoodItemService,
    MealService
  ]
})
export class DietModule {}
