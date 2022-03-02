import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutFoodItemInput } from './food-create-without-food-item.input';
import { FoodCreateOrConnectWithoutFoodItemInput } from './food-create-or-connect-without-food-item.input';
import { FoodUpsertWithoutFoodItemInput } from './food-upsert-without-food-item.input';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodUpdateWithoutFoodItemInput } from './food-update-without-food-item.input';

@InputType()
export class FoodUpdateOneRequiredWithoutFoodItemInput {

    @Field(() => FoodCreateWithoutFoodItemInput, {nullable:true})
    create?: FoodCreateWithoutFoodItemInput;

    @Field(() => FoodCreateOrConnectWithoutFoodItemInput, {nullable:true})
    connectOrCreate?: FoodCreateOrConnectWithoutFoodItemInput;

    @Field(() => FoodUpsertWithoutFoodItemInput, {nullable:true})
    upsert?: FoodUpsertWithoutFoodItemInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    connect?: FoodWhereUniqueInput;

    @Field(() => FoodUpdateWithoutFoodItemInput, {nullable:true})
    update?: FoodUpdateWithoutFoodItemInput;
}
