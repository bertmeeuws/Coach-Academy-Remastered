import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanWhereInput } from './meal-plan-where.input';
import { MealPlanOrderByWithAggregationInput } from './meal-plan-order-by-with-aggregation.input';
import { MealPlanScalarFieldEnum } from './meal-plan-scalar-field.enum';
import { MealPlanScalarWhereWithAggregatesInput } from './meal-plan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MealPlanCountAggregateInput } from './meal-plan-count-aggregate.input';
import { MealPlanAvgAggregateInput } from './meal-plan-avg-aggregate.input';
import { MealPlanSumAggregateInput } from './meal-plan-sum-aggregate.input';
import { MealPlanMinAggregateInput } from './meal-plan-min-aggregate.input';
import { MealPlanMaxAggregateInput } from './meal-plan-max-aggregate.input';

@ArgsType()
export class MealPlanGroupByArgs {

    @Field(() => MealPlanWhereInput, {nullable:true})
    where?: MealPlanWhereInput;

    @Field(() => [MealPlanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MealPlanOrderByWithAggregationInput>;

    @Field(() => [MealPlanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MealPlanScalarFieldEnum>;

    @Field(() => MealPlanScalarWhereWithAggregatesInput, {nullable:true})
    having?: MealPlanScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MealPlanCountAggregateInput, {nullable:true})
    _count?: MealPlanCountAggregateInput;

    @Field(() => MealPlanAvgAggregateInput, {nullable:true})
    _avg?: MealPlanAvgAggregateInput;

    @Field(() => MealPlanSumAggregateInput, {nullable:true})
    _sum?: MealPlanSumAggregateInput;

    @Field(() => MealPlanMinAggregateInput, {nullable:true})
    _min?: MealPlanMinAggregateInput;

    @Field(() => MealPlanMaxAggregateInput, {nullable:true})
    _max?: MealPlanMaxAggregateInput;
}
