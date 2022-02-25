import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { CoachRelationFilter } from '../coach/coach-relation-filter.input';
import { InviteRelationFilter } from '../invite/invite-relation-filter.input';

@InputType()
export class ClientWhereInput {

    @Field(() => [ClientWhereInput], {nullable:true})
    AND?: Array<ClientWhereInput>;

    @Field(() => [ClientWhereInput], {nullable:true})
    OR?: Array<ClientWhereInput>;

    @Field(() => [ClientWhereInput], {nullable:true})
    NOT?: Array<ClientWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    surname?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dob?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    number?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    postal?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => CoachRelationFilter, {nullable:true})
    coach?: CoachRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    coachId?: IntNullableFilter;

    @Field(() => InviteRelationFilter, {nullable:true})
    invite?: InviteRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    inviteId?: StringNullableFilter;
}
