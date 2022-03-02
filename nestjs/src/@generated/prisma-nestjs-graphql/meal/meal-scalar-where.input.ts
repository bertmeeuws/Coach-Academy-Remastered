import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMEAL_DAYFilter } from '../prisma/enum-meal-day-filter.input';

@InputType()
export class MealScalarWhereInput {

    @Field(() => [MealScalarWhereInput], {nullable:true})
    AND?: Array<MealScalarWhereInput>;

    @Field(() => [MealScalarWhereInput], {nullable:true})
    OR?: Array<MealScalarWhereInput>;

    @Field(() => [MealScalarWhereInput], {nullable:true})
    NOT?: Array<MealScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dietplanId?: StringFilter;

    @Field(() => EnumMEAL_DAYFilter, {nullable:true})
    day?: EnumMEAL_DAYFilter;
}
