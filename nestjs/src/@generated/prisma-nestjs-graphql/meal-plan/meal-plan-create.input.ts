import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateNestedOneWithoutMealPlanInput } from '../coach/coach-create-nested-one-without-meal-plan.input';

@InputType()
export class MealPlanCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CoachCreateNestedOneWithoutMealPlanInput, {nullable:false})
    coach!: CoachCreateNestedOneWithoutMealPlanInput;
}
