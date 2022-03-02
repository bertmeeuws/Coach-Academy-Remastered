import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemUpdateWithoutMealInput } from './food-item-update-without-meal.input';
import { FoodItemCreateWithoutMealInput } from './food-item-create-without-meal.input';

@InputType()
export class FoodItemUpsertWithWhereUniqueWithoutMealInput {

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;

    @Field(() => FoodItemUpdateWithoutMealInput, {nullable:false})
    update!: FoodItemUpdateWithoutMealInput;

    @Field(() => FoodItemCreateWithoutMealInput, {nullable:false})
    create!: FoodItemCreateWithoutMealInput;
}
