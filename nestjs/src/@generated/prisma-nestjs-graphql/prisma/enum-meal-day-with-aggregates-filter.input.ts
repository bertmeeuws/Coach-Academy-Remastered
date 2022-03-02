import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MEAL_DAY } from './meal-day.enum';
import { NestedEnumMEAL_DAYWithAggregatesFilter } from './nested-enum-meal-day-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMEAL_DAYFilter } from './nested-enum-meal-day-filter.input';

@InputType()
export class EnumMEAL_DAYWithAggregatesFilter {

    @Field(() => MEAL_DAY, {nullable:true})
    equals?: keyof typeof MEAL_DAY;

    @Field(() => [MEAL_DAY], {nullable:true})
    in?: Array<keyof typeof MEAL_DAY>;

    @Field(() => [MEAL_DAY], {nullable:true})
    notIn?: Array<keyof typeof MEAL_DAY>;

    @Field(() => NestedEnumMEAL_DAYWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMEAL_DAYWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMEAL_DAYFilter, {nullable:true})
    _min?: NestedEnumMEAL_DAYFilter;

    @Field(() => NestedEnumMEAL_DAYFilter, {nullable:true})
    _max?: NestedEnumMEAL_DAYFilter;
}
