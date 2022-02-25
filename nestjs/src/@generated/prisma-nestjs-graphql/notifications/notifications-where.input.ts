import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumNOTIFICATION_TYPEFilter } from '../prisma/enum-notification-type-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class NotificationsWhereInput {

    @Field(() => [NotificationsWhereInput], {nullable:true})
    AND?: Array<NotificationsWhereInput>;

    @Field(() => [NotificationsWhereInput], {nullable:true})
    OR?: Array<NotificationsWhereInput>;

    @Field(() => [NotificationsWhereInput], {nullable:true})
    NOT?: Array<NotificationsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumNOTIFICATION_TYPEFilter, {nullable:true})
    type?: EnumNOTIFICATION_TYPEFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    read?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;
}
