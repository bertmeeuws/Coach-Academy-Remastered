import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemWhereInput } from './food-item-where.input';

@InputType()
export class FoodItemListRelationFilter {

    @Field(() => FoodItemWhereInput, {nullable:true})
    every?: FoodItemWhereInput;

    @Field(() => FoodItemWhereInput, {nullable:true})
    some?: FoodItemWhereInput;

    @Field(() => FoodItemWhereInput, {nullable:true})
    none?: FoodItemWhereInput;
}
