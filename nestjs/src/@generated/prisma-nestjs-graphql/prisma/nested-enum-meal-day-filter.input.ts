import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MEAL_DAY } from './meal-day.enum';

@InputType()
export class NestedEnumMEAL_DAYFilter {

    @Field(() => MEAL_DAY, {nullable:true})
    equals?: keyof typeof MEAL_DAY;

    @Field(() => [MEAL_DAY], {nullable:true})
    in?: Array<keyof typeof MEAL_DAY>;

    @Field(() => [MEAL_DAY], {nullable:true})
    notIn?: Array<keyof typeof MEAL_DAY>;

    @Field(() => NestedEnumMEAL_DAYFilter, {nullable:true})
    not?: NestedEnumMEAL_DAYFilter;
}
