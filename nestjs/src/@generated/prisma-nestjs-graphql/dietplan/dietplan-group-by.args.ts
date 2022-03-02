import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanWhereInput } from './dietplan-where.input';
import { DietplanOrderByWithAggregationInput } from './dietplan-order-by-with-aggregation.input';
import { DietplanScalarFieldEnum } from './dietplan-scalar-field.enum';
import { DietplanScalarWhereWithAggregatesInput } from './dietplan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DietplanCountAggregateInput } from './dietplan-count-aggregate.input';
import { DietplanAvgAggregateInput } from './dietplan-avg-aggregate.input';
import { DietplanSumAggregateInput } from './dietplan-sum-aggregate.input';
import { DietplanMinAggregateInput } from './dietplan-min-aggregate.input';
import { DietplanMaxAggregateInput } from './dietplan-max-aggregate.input';

@ArgsType()
export class DietplanGroupByArgs {

    @Field(() => DietplanWhereInput, {nullable:true})
    where?: DietplanWhereInput;

    @Field(() => [DietplanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DietplanOrderByWithAggregationInput>;

    @Field(() => [DietplanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DietplanScalarFieldEnum>;

    @Field(() => DietplanScalarWhereWithAggregatesInput, {nullable:true})
    having?: DietplanScalarWhereWithAggregatesInput;

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
