import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealWhereInput } from './meal-where.input';
import { MealOrderByWithRelationInput } from './meal-order-by-with-relation.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MealCountAggregateInput } from './meal-count-aggregate.input';
import { MealMinAggregateInput } from './meal-min-aggregate.input';
import { MealMaxAggregateInput } from './meal-max-aggregate.input';

@ArgsType()
export class MealAggregateArgs {

    @Field(() => MealWhereInput, {nullable:true})
    where?: MealWhereInput;

    @Field(() => [MealOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MealOrderByWithRelationInput>;

    @Field(() => MealWhereUniqueInput, {nullable:true})
    cursor?: MealWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MealCountAggregateInput, {nullable:true})
    _count?: MealCountAggregateInput;

    @Field(() => MealMinAggregateInput, {nullable:true})
    _min?: MealMinAggregateInput;

    @Field(() => MealMaxAggregateInput, {nullable:true})
    _max?: MealMaxAggregateInput;
}
