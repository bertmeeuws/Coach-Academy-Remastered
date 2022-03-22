import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanWhereInput } from './meal-plan-where.input';
import { MealPlanOrderByWithRelationInput } from './meal-plan-order-by-with-relation.input';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MealPlanCountAggregateInput } from './meal-plan-count-aggregate.input';
import { MealPlanAvgAggregateInput } from './meal-plan-avg-aggregate.input';
import { MealPlanSumAggregateInput } from './meal-plan-sum-aggregate.input';
import { MealPlanMinAggregateInput } from './meal-plan-min-aggregate.input';
import { MealPlanMaxAggregateInput } from './meal-plan-max-aggregate.input';

@ArgsType()
export class MealPlanAggregateArgs {
  @Field(() => MealPlanWhereInput, { nullable: true })
  where?: MealPlanWhereInput;

  @Field(() => [MealPlanOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MealPlanOrderByWithRelationInput>;

  @Field(() => MealPlanWhereUniqueInput, { nullable: true })
  cursor?: MealPlanWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MealPlanCountAggregateInput, { nullable: true })
  _count?: MealPlanCountAggregateInput;

  @Field(() => MealPlanAvgAggregateInput, { nullable: true })
  _avg?: MealPlanAvgAggregateInput;

  @Field(() => MealPlanSumAggregateInput, { nullable: true })
  _sum?: MealPlanSumAggregateInput;

  @Field(() => MealPlanMinAggregateInput, { nullable: true })
  _min?: MealPlanMinAggregateInput;

  @Field(() => MealPlanMaxAggregateInput, { nullable: true })
  _max?: MealPlanMaxAggregateInput;
}
