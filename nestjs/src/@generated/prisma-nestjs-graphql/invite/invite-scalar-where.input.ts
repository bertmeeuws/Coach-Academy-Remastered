import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class InviteScalarWhereInput {

    @Field(() => [InviteScalarWhereInput], {nullable:true})
    AND?: Array<InviteScalarWhereInput>;

    @Field(() => [InviteScalarWhereInput], {nullable:true})
    OR?: Array<InviteScalarWhereInput>;

    @Field(() => [InviteScalarWhereInput], {nullable:true})
    NOT?: Array<InviteScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    coachId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    invalidated?: DateTimeNullableFilter;
}
