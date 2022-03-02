import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DietplanCountAggregate } from './dietplan-count-aggregate.output';
import { DietplanAvgAggregate } from './dietplan-avg-aggregate.output';
import { DietplanSumAggregate } from './dietplan-sum-aggregate.output';
import { DietplanMinAggregate } from './dietplan-min-aggregate.output';
import { DietplanMaxAggregate } from './dietplan-max-aggregate.output';

@ObjectType()
export class AggregateDietplan {

    @Field(() => DietplanCountAggregate, {nullable:true})
    _count?: DietplanCountAggregate;

    @Field(() => DietplanAvgAggregate, {nullable:true})
    _avg?: DietplanAvgAggregate;

    @Field(() => DietplanSumAggregate, {nullable:true})
    _sum?: DietplanSumAggregate;

    @Field(() => DietplanMinAggregate, {nullable:true})
    _min?: DietplanMinAggregate;

    @Field(() => DietplanMaxAggregate, {nullable:true})
    _max?: DietplanMaxAggregate;
}
