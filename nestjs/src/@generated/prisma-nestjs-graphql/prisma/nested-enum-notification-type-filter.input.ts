import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NOTIFICATION_TYPE } from './notification-type.enum';

@InputType()
export class NestedEnumNOTIFICATION_TYPEFilter {

    @Field(() => NOTIFICATION_TYPE, {nullable:true})
    equals?: keyof typeof NOTIFICATION_TYPE;

    @Field(() => [NOTIFICATION_TYPE], {nullable:true})
    in?: Array<keyof typeof NOTIFICATION_TYPE>;

    @Field(() => [NOTIFICATION_TYPE], {nullable:true})
    notIn?: Array<keyof typeof NOTIFICATION_TYPE>;

    @Field(() => NestedEnumNOTIFICATION_TYPEFilter, {nullable:true})
    not?: NestedEnumNOTIFICATION_TYPEFilter;
}