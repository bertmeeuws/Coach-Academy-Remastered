import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from './muscle-group.enum';
import { NestedEnumMUSCLE_GROUPFilter } from './nested-enum-muscle-group-filter.input';

@InputType()
export class EnumMUSCLE_GROUPFilter {

    @Field(() => MUSCLE_GROUP, {nullable:true})
    equals?: keyof typeof MUSCLE_GROUP;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    in?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    notIn?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => NestedEnumMUSCLE_GROUPFilter, {nullable:true})
    not?: NestedEnumMUSCLE_GROUPFilter;
}
