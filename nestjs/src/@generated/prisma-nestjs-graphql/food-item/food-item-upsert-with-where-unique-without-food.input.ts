import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemUpdateWithoutFoodInput } from './food-item-update-without-food.input';
import { FoodItemCreateWithoutFoodInput } from './food-item-create-without-food.input';

@InputType()
export class FoodItemUpsertWithWhereUniqueWithoutFoodInput {

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;

    @Field(() => FoodItemUpdateWithoutFoodInput, {nullable:false})
    update!: FoodItemUpdateWithoutFoodInput;

    @Field(() => FoodItemCreateWithoutFoodInput, {nullable:false})
    create!: FoodItemCreateWithoutFoodInput;
}
