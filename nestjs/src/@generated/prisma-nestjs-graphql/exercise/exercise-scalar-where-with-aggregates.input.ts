import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMUSCLE_GROUPWithAggregatesFilter } from '../prisma/enum-muscle-group-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumMUSCLE_GROUPNullableListFilter } from '../prisma/enum-muscle-group-nullable-list-filter.input';

@InputType()
export class ExerciseScalarWhereWithAggregatesInput {

    @Field(() => [ExerciseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExerciseScalarWhereWithAggregatesInput>;

    @Field(() => [ExerciseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExerciseScalarWhereWithAggregatesInput>;

    @Field(() => [ExerciseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExerciseScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumMUSCLE_GROUPWithAggregatesFilter, {nullable:true})
    primary_muscle?: EnumMUSCLE_GROUPWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    video?: StringNullableWithAggregatesFilter;

    @Field(() => EnumMUSCLE_GROUPNullableListFilter, {nullable:true})
    secondary_muscles?: EnumMUSCLE_GROUPNullableListFilter;
}
