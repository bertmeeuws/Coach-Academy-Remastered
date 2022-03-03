import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MealPlanCountAggregate } from './meal-plan-count-aggregate.output';
import { MealPlanAvgAggregate } from './meal-plan-avg-aggregate.output';
import { MealPlanSumAggregate } from './meal-plan-sum-aggregate.output';
import { MealPlanMinAggregate } from './meal-plan-min-aggregate.output';
import { MealPlanMaxAggregate } from './meal-plan-max-aggregate.output';

@ObjectType()
export class AggregateMealPlan {

    @Field(() => MealPlanCountAggregate, {nullable:true})
    _count?: MealPlanCountAggregate;

    @Field(() => MealPlanAvgAggregate, {nullable:true})
    _avg?: MealPlanAvgAggregate;

    @Field(() => MealPlanSumAggregate, {nullable:true})
    _sum?: MealPlanSumAggregate;

    @Field(() => MealPlanMinAggregate, {nullable:true})
    _min?: MealPlanMinAggregate;

    @Field(() => MealPlanMaxAggregate, {nullable:true})
    _max?: MealPlanMaxAggregate;
}
