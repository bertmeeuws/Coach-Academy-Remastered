import { registerEnumType } from '@nestjs/graphql';

export enum FoodScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    amount = "amount",
    carbs = "carbs",
    protein = "protein",
    fat = "fat"
}


registerEnumType(FoodScalarFieldEnum, { name: 'FoodScalarFieldEnum', description: undefined })
