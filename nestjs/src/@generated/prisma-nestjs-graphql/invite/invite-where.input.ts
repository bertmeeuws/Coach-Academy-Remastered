import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CoachRelationFilter } from '../coach/coach-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ClientRelationFilter } from '../client/client-relation-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class InviteWhereInput {

    @Field(() => [InviteWhereInput], {nullable:true})
    AND?: Array<InviteWhereInput>;

    @Field(() => [InviteWhereInput], {nullable:true})
    OR?: Array<InviteWhereInput>;

    @Field(() => [InviteWhereInput], {nullable:true})
    NOT?: Array<InviteWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => CoachRelationFilter, {nullable:true})
    coach?: CoachRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    coachId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ClientRelationFilter, {nullable:true})
    client?: ClientRelationFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    invalidated?: DateTimeNullableFilter;
}
