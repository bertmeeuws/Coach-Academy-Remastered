import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodItemUncheckedCreateNestedManyWithoutFoodInput } from '../food-item/food-item-unchecked-create-nested-many-without-food.input';

@InputType()
export class FoodUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    carbs!: number;

    @Field(() => Int, {nullable:false})
    protein!: number;

    @Field(() => Int, {nullable:false})
    fat!: number;

    @Field(() => FoodItemUncheckedCreateNestedManyWithoutFoodInput, {nullable:true})
    FoodItem?: FoodItemUncheckedCreateNestedManyWithoutFoodInput;
}
