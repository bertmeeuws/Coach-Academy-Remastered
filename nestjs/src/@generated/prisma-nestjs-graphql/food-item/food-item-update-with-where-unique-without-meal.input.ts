import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemUpdateWithoutMealInput } from './food-item-update-without-meal.input';

@InputType()
export class FoodItemUpdateWithWhereUniqueWithoutMealInput {

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;

    @Field(() => FoodItemUpdateWithoutMealInput, {nullable:false})
    data!: FoodItemUpdateWithoutMealInput;
}
