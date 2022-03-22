import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutMealPlanInput } from './coach-create-without-meal-plan.input';
import { CoachCreateOrConnectWithoutMealPlanInput } from './coach-create-or-connect-without-meal-plan.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachCreateNestedOneWithoutMealPlanInput {
  @Field(() => CoachCreateWithoutMealPlanInput, { nullable: true })
  create?: CoachCreateWithoutMealPlanInput;

  @Field(() => CoachCreateOrConnectWithoutMealPlanInput, { nullable: true })
  connectOrCreate?: CoachCreateOrConnectWithoutMealPlanInput;

  @Field(() => CoachWhereUniqueInput, { nullable: true })
  connect?: CoachWhereUniqueInput;
}
