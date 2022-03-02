import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateNestedOneWithoutFoodItemInput } from '../food/food-create-nested-one-without-food-item.input';

@InputType()
export class FoodItemCreateWithoutMealInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:true})
    mealId?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => FoodCreateNestedOneWithoutFoodItemInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutFoodItemInput;
}
