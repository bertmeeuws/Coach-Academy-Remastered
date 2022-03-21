import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMUSCLE_GROUPFilter } from '../prisma/enum-muscle-group-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumMUSCLE_GROUPNullableListFilter } from '../prisma/enum-muscle-group-nullable-list-filter.input';
import { ExerciseInWorkoutListRelationFilter } from '../exercise-in-workout/exercise-in-workout-list-relation-filter.input';

@InputType()
export class ExerciseWhereInput {

    @Field(() => [ExerciseWhereInput], {nullable:true})
    AND?: Array<ExerciseWhereInput>;

    @Field(() => [ExerciseWhereInput], {nullable:true})
    OR?: Array<ExerciseWhereInput>;

    @Field(() => [ExerciseWhereInput], {nullable:true})
    NOT?: Array<ExerciseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumMUSCLE_GROUPFilter, {nullable:true})
    primary_muscle?: EnumMUSCLE_GROUPFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    video?: StringNullableFilter;

    @Field(() => EnumMUSCLE_GROUPNullableListFilter, {nullable:true})
    secondary_muscles?: EnumMUSCLE_GROUPNullableListFilter;

    @Field(() => ExerciseInWorkoutListRelationFilter, {nullable:true})
    ExerciseInWorkout?: ExerciseInWorkoutListRelationFilter;
}
