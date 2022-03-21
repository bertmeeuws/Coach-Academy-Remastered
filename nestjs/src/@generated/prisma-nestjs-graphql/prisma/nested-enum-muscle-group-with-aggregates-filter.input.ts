import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from './muscle-group.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMUSCLE_GROUPFilter } from './nested-enum-muscle-group-filter.input';

@InputType()
export class NestedEnumMUSCLE_GROUPWithAggregatesFilter {

    @Field(() => MUSCLE_GROUP, {nullable:true})
    equals?: keyof typeof MUSCLE_GROUP;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    in?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    notIn?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => NestedEnumMUSCLE_GROUPWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMUSCLE_GROUPWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMUSCLE_GROUPFilter, {nullable:true})
    _min?: NestedEnumMUSCLE_GROUPFilter;

    @Field(() => NestedEnumMUSCLE_GROUPFilter, {nullable:true})
    _max?: NestedEnumMUSCLE_GROUPFilter;
}
