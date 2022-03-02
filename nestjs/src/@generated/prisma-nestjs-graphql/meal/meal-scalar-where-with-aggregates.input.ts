import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMEAL_DAYWithAggregatesFilter } from '../prisma/enum-meal-day-with-aggregates-filter.input';

@InputType()
export class MealScalarWhereWithAggregatesInput {

    @Field(() => [MealScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MealScalarWhereWithAggregatesInput>;

    @Field(() => [MealScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MealScalarWhereWithAggregatesInput>;

    @Field(() => [MealScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MealScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dietplanId?: StringWithAggregatesFilter;

    @Field(() => EnumMEAL_DAYWithAggregatesFilter, {nullable:true})
    day?: EnumMEAL_DAYWithAggregatesFilter;
}
