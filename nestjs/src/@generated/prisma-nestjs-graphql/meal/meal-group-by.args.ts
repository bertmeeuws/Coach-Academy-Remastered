import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealWhereInput } from './meal-where.input';
import { MealOrderByWithAggregationInput } from './meal-order-by-with-aggregation.input';
import { MealScalarFieldEnum } from './meal-scalar-field.enum';
import { MealScalarWhereWithAggregatesInput } from './meal-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MealCountAggregateInput } from './meal-count-aggregate.input';
import { MealMinAggregateInput } from './meal-min-aggregate.input';
import { MealMaxAggregateInput } from './meal-max-aggregate.input';

@ArgsType()
export class MealGroupByArgs {

    @Field(() => MealWhereInput, {nullable:true})
    where?: MealWhereInput;

    @Field(() => [MealOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MealOrderByWithAggregationInput>;

    @Field(() => [MealScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MealScalarFieldEnum>;

    @Field(() => MealScalarWhereWithAggregatesInput, {nullable:true})
    having?: MealScalarWhereWithAggregatesInput;

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
