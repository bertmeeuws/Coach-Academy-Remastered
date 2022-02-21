import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';
import { ClientOrderByWithRelationInput } from './client-order-by-with-relation.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClientCountAggregateInput } from './client-count-aggregate.input';
import { ClientAvgAggregateInput } from './client-avg-aggregate.input';
import { ClientSumAggregateInput } from './client-sum-aggregate.input';
import { ClientMinAggregateInput } from './client-min-aggregate.input';
import { ClientMaxAggregateInput } from './client-max-aggregate.input';

@ArgsType()
export class ClientAggregateArgs {

    @Field(() => ClientWhereInput, {nullable:true})
    where?: ClientWhereInput;

    @Field(() => [ClientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClientOrderByWithRelationInput>;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    cursor?: ClientWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClientCountAggregateInput, {nullable:true})
    _count?: ClientCountAggregateInput;

    @Field(() => ClientAvgAggregateInput, {nullable:true})
    _avg?: ClientAvgAggregateInput;

    @Field(() => ClientSumAggregateInput, {nullable:true})
    _sum?: ClientSumAggregateInput;

    @Field(() => ClientMinAggregateInput, {nullable:true})
    _min?: ClientMinAggregateInput;

    @Field(() => ClientMaxAggregateInput, {nullable:true})
    _max?: ClientMaxAggregateInput;
}
