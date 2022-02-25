import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumNOTIFICATION_TYPEWithAggregatesFilter } from '../prisma/enum-notification-type-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class NotificationsScalarWhereWithAggregatesInput {

    @Field(() => [NotificationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotificationsScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotificationsScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotificationsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumNOTIFICATION_TYPEWithAggregatesFilter, {nullable:true})
    type?: EnumNOTIFICATION_TYPEWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    read?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;
}
