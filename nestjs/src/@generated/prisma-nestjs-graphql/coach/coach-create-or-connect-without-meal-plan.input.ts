import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachCreateWithoutMealPlanInput } from './coach-create-without-meal-plan.input';

@InputType()
export class CoachCreateOrConnectWithoutMealPlanInput {
  @Field(() => CoachWhereUniqueInput, { nullable: false })
  where!: CoachWhereUniqueInput;

  @Field(() => CoachCreateWithoutMealPlanInput, { nullable: false })
  create!: CoachCreateWithoutMealPlanInput;
}
