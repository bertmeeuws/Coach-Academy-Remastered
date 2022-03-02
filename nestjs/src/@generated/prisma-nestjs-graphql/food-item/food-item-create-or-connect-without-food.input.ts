import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemCreateWithoutFoodInput } from './food-item-create-without-food.input';

@InputType()
export class FoodItemCreateOrConnectWithoutFoodInput {

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;

    @Field(() => FoodItemCreateWithoutFoodInput, {nullable:false})
    create!: FoodItemCreateWithoutFoodInput;
}
