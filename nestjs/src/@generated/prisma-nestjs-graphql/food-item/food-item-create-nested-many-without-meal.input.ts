import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemCreateWithoutMealInput } from './food-item-create-without-meal.input';
import { FoodItemCreateOrConnectWithoutMealInput } from './food-item-create-or-connect-without-meal.input';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';

@InputType()
export class FoodItemCreateNestedManyWithoutMealInput {

    @Field(() => [FoodItemCreateWithoutMealInput], {nullable:true})
    create?: Array<FoodItemCreateWithoutMealInput>;

    @Field(() => [FoodItemCreateOrConnectWithoutMealInput], {nullable:true})
    connectOrCreate?: Array<FoodItemCreateOrConnectWithoutMealInput>;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    connect?: Array<FoodItemWhereUniqueInput>;
}
