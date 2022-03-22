import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanCreateInput } from './meal-plan-create.input';

@ArgsType()
export class CreateOneMealPlanArgs {
  @Field(() => MealPlanCreateInput, { nullable: false })
  data!: MealPlanCreateInput;
}
