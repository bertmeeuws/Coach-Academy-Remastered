import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachUpdateWithoutMealPlanInput } from './coach-update-without-meal-plan.input';
import { CoachCreateWithoutMealPlanInput } from './coach-create-without-meal-plan.input';

@InputType()
export class CoachUpsertWithoutMealPlanInput {

    @Field(() => CoachUpdateWithoutMealPlanInput, {nullable:false})
    update!: CoachUpdateWithoutMealPlanInput;

    @Field(() => CoachCreateWithoutMealPlanInput, {nullable:false})
    create!: CoachCreateWithoutMealPlanInput;
}
