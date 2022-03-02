import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MEAL_DAY } from '../prisma/meal-day.enum';
import { DietplanCreateNestedOneWithoutMealInput } from '../dietplan/dietplan-create-nested-one-without-meal.input';
import { FoodItemCreateNestedManyWithoutMealInput } from '../food-item/food-item-create-nested-many-without-meal.input';

@InputType()
export class MealCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MEAL_DAY, {nullable:false})
    day!: keyof typeof MEAL_DAY;

    @Field(() => DietplanCreateNestedOneWithoutMealInput, {nullable:false})
    dietplan!: DietplanCreateNestedOneWithoutMealInput;

    @Field(() => FoodItemCreateNestedManyWithoutMealInput, {nullable:true})
    foods?: FoodItemCreateNestedManyWithoutMealInput;
}
