import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class InviteScalarWhereWithAggregatesInput {

    @Field(() => [InviteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InviteScalarWhereWithAggregatesInput>;

    @Field(() => [InviteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InviteScalarWhereWithAggregatesInput>;

    @Field(() => [InviteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InviteScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    coachId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    invalidated?: DateTimeNullableWithAggregatesFilter;
}
