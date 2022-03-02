import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class FoodScalarWhereWithAggregatesInput {

    @Field(() => [FoodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FoodScalarWhereWithAggregatesInput>;

    @Field(() => [FoodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FoodScalarWhereWithAggregatesInput>;

    @Field(() => [FoodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FoodScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    amount?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    carbs?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    protein?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    fat?: IntWithAggregatesFilter;
}
