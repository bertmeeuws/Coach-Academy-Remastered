import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('food')
export class FoodItemResolver {
  @Mutation('createFoodItem')
  create() {}

  @Query('fooditem')
  findAll() {}

  @Query('fooditem')
  findOne(@Args('id') id: string) {}
}
