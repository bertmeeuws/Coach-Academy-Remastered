import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanWhereInput } from './dietplan-where.input';
import { DietplanOrderByWithRelationInput } from './dietplan-order-by-with-relation.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DietplanCountAggregateInput } from './dietplan-count-aggregate.input';
import { DietplanAvgAggregateInput } from './dietplan-avg-aggregate.input';
import { DietplanSumAggregateInput } from './dietplan-sum-aggregate.input';
import { DietplanMinAggregateInput } from './dietplan-min-aggregate.input';
import { DietplanMaxAggregateInput } from './dietplan-max-aggregate.input';

@ArgsType()
export class DietplanAggregateArgs {

    @Field(() => DietplanWhereInput, {nullable:true})
    where?: DietplanWhereInput;

    @Field(() => [DietplanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DietplanOrderByWithRelationInput>;

    @Field(() => DietplanWhereUniqueInput, {nullable:true})
    cursor?: DietplanWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DietplanCountAggregateInput, {nullable:true})
    _count?: DietplanCountAggregateInput;

    @Field(() => DietplanAvgAggregateInput, {nullable:true})
    _avg?: DietplanAvgAggregateInput;

    @Field(() => DietplanSumAggregateInput, {nullable:true})
    _sum?: DietplanSumAggregateInput;

    @Field(() => DietplanMinAggregateInput, {nullable:true})
    _min?: DietplanMinAggregateInput;

    @Field(() => DietplanMaxAggregateInput, {nullable:true})
    _max?: DietplanMaxAggregateInput;
}
