import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MealPlanAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  coachId?: true;
}
