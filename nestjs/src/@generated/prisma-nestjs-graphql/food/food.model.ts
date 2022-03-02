import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodItem } from '../food-item/food-item.model';
import { FoodCount } from './food-count.output';

@ObjectType()
export class Food {

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => [FoodItem], {nullable:true})
    FoodItem?: Array<FoodItem>;

    @Field(() => FoodCount, {nullable:false})
    _count?: FoodCount;
}
