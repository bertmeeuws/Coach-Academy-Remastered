import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ClientScalarWhereInput {

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    AND?: Array<ClientScalarWhereInput>;

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    OR?: Array<ClientScalarWhereInput>;

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    NOT?: Array<ClientScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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

    @Field(() => IntNullableFilter, {nullable:true})
    coachId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    inviteId?: StringNullableFilter;
}
