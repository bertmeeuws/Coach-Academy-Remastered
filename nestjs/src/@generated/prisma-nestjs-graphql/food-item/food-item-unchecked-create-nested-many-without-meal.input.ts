import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemCreateWithoutMealInput } from './food-item-create-without-meal.input';
import { FoodItemCreateOrConnectWithoutMealInput } from './food-item-create-or-connect-without-meal.input';
import { FoodItemCreateManyMealInputEnvelope } from './food-item-create-many-meal-input-envelope.input';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';

@InputType()
export class FoodItemUncheckedCreateNestedManyWithoutMealInput {

    @Field(() => [FoodItemCreateWithoutMealInput], {nullable:true})
    create?: Array<FoodItemCreateWithoutMealInput>;

    @Field(() => [FoodItemCreateOrConnectWithoutMealInput], {nullable:true})
    connectOrCreate?: Array<FoodItemCreateOrConnectWithoutMealInput>;

    @Field(() => FoodItemCreateManyMealInputEnvelope, {nullable:true})
    createMany?: FoodItemCreateManyMealInputEnvelope;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    connect?: Array<FoodItemWhereUniqueInput>;
}
