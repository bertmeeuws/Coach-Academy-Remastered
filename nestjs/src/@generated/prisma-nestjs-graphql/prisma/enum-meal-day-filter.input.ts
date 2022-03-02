import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MEAL_DAY } from './meal-day.enum';
import { NestedEnumMEAL_DAYFilter } from './nested-enum-meal-day-filter.input';

@InputType()
export class EnumMEAL_DAYFilter {

    @Field(() => MEAL_DAY, {nullable:true})
    equals?: keyof typeof MEAL_DAY;

    @Field(() => [MEAL_DAY], {nullable:true})
    in?: Array<keyof typeof MEAL_DAY>;

    @Field(() => [MEAL_DAY], {nullable:true})
    notIn?: Array<keyof typeof MEAL_DAY>;

    @Field(() => NestedEnumMEAL_DAYFilter, {nullable:true})
    not?: NestedEnumMEAL_DAYFilter;
}
