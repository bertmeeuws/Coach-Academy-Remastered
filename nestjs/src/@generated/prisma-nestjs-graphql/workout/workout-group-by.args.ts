import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutWhereInput } from './workout-where.input';
import { WorkoutOrderByWithAggregationInput } from './workout-order-by-with-aggregation.input';
import { WorkoutScalarFieldEnum } from './workout-scalar-field.enum';
import { WorkoutScalarWhereWithAggregatesInput } from './workout-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkoutCountAggregateInput } from './workout-count-aggregate.input';
import { WorkoutAvgAggregateInput } from './workout-avg-aggregate.input';
import { WorkoutSumAggregateInput } from './workout-sum-aggregate.input';
import { WorkoutMinAggregateInput } from './workout-min-aggregate.input';
import { WorkoutMaxAggregateInput } from './workout-max-aggregate.input';

@ArgsType()
export class WorkoutGroupByArgs {

    @Field(() => WorkoutWhereInput, {nullable:true})
    where?: WorkoutWhereInput;

    @Field(() => [WorkoutOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkoutOrderByWithAggregationInput>;

    @Field(() => [WorkoutScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkoutScalarFieldEnum>;

    @Field(() => WorkoutScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkoutScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkoutCountAggregateInput, {nullable:true})
    _count?: WorkoutCountAggregateInput;

    @Field(() => WorkoutAvgAggregateInput, {nullable:true})
    _avg?: WorkoutAvgAggregateInput;

    @Field(() => WorkoutSumAggregateInput, {nullable:true})
    _sum?: WorkoutSumAggregateInput;

    @Field(() => WorkoutMinAggregateInput, {nullable:true})
    _min?: WorkoutMinAggregateInput;

    @Field(() => WorkoutMaxAggregateInput, {nullable:true})
    _max?: WorkoutMaxAggregateInput;
}
