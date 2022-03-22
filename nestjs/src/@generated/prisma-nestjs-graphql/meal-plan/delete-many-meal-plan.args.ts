import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanWhereInput } from './meal-plan-where.input';

@ArgsType()
export class DeleteManyMealPlanArgs {
  @Field(() => MealPlanWhereInput, { nullable: true })
  where?: MealPlanWhereInput;
}
