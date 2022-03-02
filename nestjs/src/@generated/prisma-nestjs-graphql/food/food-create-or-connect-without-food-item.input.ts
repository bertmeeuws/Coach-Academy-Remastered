import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodCreateWithoutFoodItemInput } from './food-create-without-food-item.input';

@InputType()
export class FoodCreateOrConnectWithoutFoodItemInput {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    where!: FoodWhereUniqueInput;

    @Field(() => FoodCreateWithoutFoodItemInput, {nullable:false})
    create!: FoodCreateWithoutFoodItemInput;
}
