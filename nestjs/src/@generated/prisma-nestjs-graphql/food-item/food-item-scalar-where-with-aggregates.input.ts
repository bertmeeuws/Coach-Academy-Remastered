import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class FoodItemScalarWhereWithAggregatesInput {

    @Field(() => [FoodItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FoodItemScalarWhereWithAggregatesInput>;

    @Field(() => [FoodItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FoodItemScalarWhereWithAggregatesInput>;

    @Field(() => [FoodItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FoodItemScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    amount?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    mealId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    foodId?: StringWithAggregatesFilter;
}
