import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NOTIFICATION_TYPE } from './notification-type.enum';
import { NestedEnumNOTIFICATION_TYPEWithAggregatesFilter } from './nested-enum-notification-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNOTIFICATION_TYPEFilter } from './nested-enum-notification-type-filter.input';

@InputType()
export class EnumNOTIFICATION_TYPEWithAggregatesFilter {

    @Field(() => NOTIFICATION_TYPE, {nullable:true})
    equals?: keyof typeof NOTIFICATION_TYPE;

    @Field(() => [NOTIFICATION_TYPE], {nullable:true})
    in?: Array<keyof typeof NOTIFICATION_TYPE>;

    @Field(() => [NOTIFICATION_TYPE], {nullable:true})
    notIn?: Array<keyof typeof NOTIFICATION_TYPE>;

    @Field(() => NestedEnumNOTIFICATION_TYPEWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNOTIFICATION_TYPEWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNOTIFICATION_TYPEFilter, {nullable:true})
    _min?: NestedEnumNOTIFICATION_TYPEFilter;

    @Field(() => NestedEnumNOTIFICATION_TYPEFilter, {nullable:true})
    _max?: NestedEnumNOTIFICATION_TYPEFilter;
}
