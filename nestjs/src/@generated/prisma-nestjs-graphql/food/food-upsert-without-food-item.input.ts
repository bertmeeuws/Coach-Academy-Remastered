import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodUpdateWithoutFoodItemInput } from './food-update-without-food-item.input';
import { FoodCreateWithoutFoodItemInput } from './food-create-without-food-item.input';

@InputType()
export class FoodUpsertWithoutFoodItemInput {

    @Field(() => FoodUpdateWithoutFoodItemInput, {nullable:false})
    update!: FoodUpdateWithoutFoodItemInput;

    @Field(() => FoodCreateWithoutFoodItemInput, {nullable:false})
    create!: FoodCreateWithoutFoodItemInput;
}
