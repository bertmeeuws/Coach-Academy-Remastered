import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanCreateManyCoachInput } from './meal-plan-create-many-coach.input';

@InputType()
export class MealPlanCreateManyCoachInputEnvelope {
  @Field(() => [MealPlanCreateManyCoachInput], { nullable: false })
  data!: Array<MealPlanCreateManyCoachInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
