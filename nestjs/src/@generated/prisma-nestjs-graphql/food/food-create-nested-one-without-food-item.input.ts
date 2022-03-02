import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutFoodItemInput } from './food-create-without-food-item.input';
import { FoodCreateOrConnectWithoutFoodItemInput } from './food-create-or-connect-without-food-item.input';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@InputType()
export class FoodCreateNestedOneWithoutFoodItemInput {

    @Field(() => FoodCreateWithoutFoodItemInput, {nullable:true})
    create?: FoodCreateWithoutFoodItemInput;

    @Field(() => FoodCreateOrConnectWithoutFoodItemInput, {nullable:true})
    connectOrCreate?: FoodCreateOrConnectWithoutFoodItemInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    connect?: FoodWhereUniqueInput;
}
