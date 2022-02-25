import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumNOTIFICATION_TYPEFilter } from '../prisma/enum-notification-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class NotificationsScalarWhereInput {

    @Field(() => [NotificationsScalarWhereInput], {nullable:true})
    AND?: Array<NotificationsScalarWhereInput>;

    @Field(() => [NotificationsScalarWhereInput], {nullable:true})
    OR?: Array<NotificationsScalarWhereInput>;

    @Field(() => [NotificationsScalarWhereInput], {nullable:true})
    NOT?: Array<NotificationsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumNOTIFICATION_TYPEFilter, {nullable:true})
    type?: EnumNOTIFICATION_TYPEFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    read?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;
}
