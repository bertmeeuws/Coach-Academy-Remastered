import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';
import { CoachOrderByWithAggregationInput } from './coach-order-by-with-aggregation.input';
import { CoachScalarFieldEnum } from './coach-scalar-field.enum';
import { CoachScalarWhereWithAggregatesInput } from './coach-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CoachCountAggregateInput } from './coach-count-aggregate.input';
import { CoachAvgAggregateInput } from './coach-avg-aggregate.input';
import { CoachSumAggregateInput } from './coach-sum-aggregate.input';
import { CoachMinAggregateInput } from './coach-min-aggregate.input';
import { CoachMaxAggregateInput } from './coach-max-aggregate.input';

@ArgsType()
export class CoachGroupByArgs {

    @Field(() => CoachWhereInput, {nullable:true})
    where?: CoachWhereInput;

    @Field(() => [CoachOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CoachOrderByWithAggregationInput>;

    @Field(() => [CoachScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CoachScalarFieldEnum>;

    @Field(() => CoachScalarWhereWithAggregatesInput, {nullable:true})
    having?: CoachScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CoachCountAggregateInput, {nullable:true})
    _count?: CoachCountAggregateInput;

    @Field(() => CoachAvgAggregateInput, {nullable:true})
    _avg?: CoachAvgAggregateInput;

    @Field(() => CoachSumAggregateInput, {nullable:true})
    _sum?: CoachSumAggregateInput;

    @Field(() => CoachMinAggregateInput, {nullable:true})
    _min?: CoachMinAggregateInput;

    @Field(() => CoachMaxAggregateInput, {nullable:true})
    _max?: CoachMaxAggregateInput;
}
