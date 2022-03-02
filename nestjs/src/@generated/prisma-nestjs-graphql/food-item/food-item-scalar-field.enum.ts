import { registerEnumType } from '@nestjs/graphql';

export enum FoodItemScalarFieldEnum {
    id = "id",
    amount = "amount",
    mealId = "mealId",
    notes = "notes",
    foodId = "foodId"
}


registerEnumType(FoodItemScalarFieldEnum, { name: 'FoodItemScalarFieldEnum', description: undefined })
