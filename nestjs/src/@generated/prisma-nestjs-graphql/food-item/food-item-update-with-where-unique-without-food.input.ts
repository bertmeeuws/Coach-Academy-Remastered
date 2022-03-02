import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemUpdateWithoutFoodInput } from './food-item-update-without-food.input';

@InputType()
export class FoodItemUpdateWithWhereUniqueWithoutFoodInput {

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;

    @Field(() => FoodItemUpdateWithoutFoodInput, {nullable:false})
    data!: FoodItemUpdateWithoutFoodInput;
}
