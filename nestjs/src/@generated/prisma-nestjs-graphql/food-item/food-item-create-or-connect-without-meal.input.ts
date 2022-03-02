import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemCreateWithoutMealInput } from './food-item-create-without-meal.input';

@InputType()
export class FoodItemCreateOrConnectWithoutMealInput {

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;

    @Field(() => FoodItemCreateWithoutMealInput, {nullable:false})
    create!: FoodItemCreateWithoutMealInput;
}
