import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodItemCreateNestedManyWithoutFoodInput } from '../food-item/food-item-create-nested-many-without-food.input';

@InputType()
export class FoodCreateInput {

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

    @Field(() => FoodItemCreateNestedManyWithoutFoodInput, {nullable:true})
    FoodItem?: FoodItemCreateNestedManyWithoutFoodInput;
}
