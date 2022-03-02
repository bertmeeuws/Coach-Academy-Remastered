import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MEAL_DAY } from '../prisma/meal-day.enum';
import { FoodItemCreateNestedManyWithoutMealInput } from '../food-item/food-item-create-nested-many-without-meal.input';

@InputType()
export class MealCreateWithoutDietplanInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MEAL_DAY, {nullable:false})
    day!: keyof typeof MEAL_DAY;

    @Field(() => FoodItemCreateNestedManyWithoutMealInput, {nullable:true})
    foods?: FoodItemCreateNestedManyWithoutMealInput;
}
