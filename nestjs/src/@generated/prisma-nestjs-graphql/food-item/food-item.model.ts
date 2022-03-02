import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Meal } from '../meal/meal.model';
import { Food } from '../food/food.model';
import { FoodItemCount } from './food-item-count.output';

@ObjectType()
export class FoodItem {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => [Meal], {nullable:true})
    Meal?: Array<Meal>;

    @Field(() => String, {nullable:true})
    mealId!: string | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Food, {nullable:false})
    food?: Food;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => FoodItemCount, {nullable:false})
    _count?: FoodItemCount;
}
