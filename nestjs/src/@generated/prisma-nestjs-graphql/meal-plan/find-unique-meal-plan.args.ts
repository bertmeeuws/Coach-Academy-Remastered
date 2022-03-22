import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';

@ArgsType()
export class FindUniqueMealPlanArgs {
  @Field(() => MealPlanWhereUniqueInput, { nullable: false })
  where!: MealPlanWhereUniqueInput;
}
