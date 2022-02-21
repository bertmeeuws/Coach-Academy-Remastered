import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';
import { CoachOrderByWithRelationInput } from './coach-order-by-with-relation.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CoachCountAggregateInput } from './coach-count-aggregate.input';
import { CoachAvgAggregateInput } from './coach-avg-aggregate.input';
import { CoachSumAggregateInput } from './coach-sum-aggregate.input';
import { CoachMinAggregateInput } from './coach-min-aggregate.input';
import { CoachMaxAggregateInput } from './coach-max-aggregate.input';

@ArgsType()
export class CoachAggregateArgs {

    @Field(() => CoachWhereInput, {nullable:true})
    where?: CoachWhereInput;

    @Field(() => [CoachOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CoachOrderByWithRelationInput>;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    cursor?: CoachWhereUniqueInput;

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
