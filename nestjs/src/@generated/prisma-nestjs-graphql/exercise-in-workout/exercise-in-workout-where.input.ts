import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ExerciseRelationFilter } from '../exercise/exercise-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { WorkoutRelationFilter } from '../workout/workout-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ExerciseInWorkoutWhereInput {

    @Field(() => [ExerciseInWorkoutWhereInput], {nullable:true})
    AND?: Array<ExerciseInWorkoutWhereInput>;

    @Field(() => [ExerciseInWorkoutWhereInput], {nullable:true})
    OR?: Array<ExerciseInWorkoutWhereInput>;

    @Field(() => [ExerciseInWorkoutWhereInput], {nullable:true})
    NOT?: Array<ExerciseInWorkoutWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => ExerciseRelationFilter, {nullable:true})
    exercise?: ExerciseRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    exerciseId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    meta?: JsonFilter;

    @Field(() => WorkoutRelationFilter, {nullable:true})
    Workout?: WorkoutRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    workoutId?: StringNullableFilter;
}
