import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ExerciseInWorkoutListRelationFilter } from '../exercise-in-workout/exercise-in-workout-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CoachRelationFilter } from '../coach/coach-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ClientRelationFilter } from '../client/client-relation-filter.input';

@InputType()
export class WorkoutWhereInput {

    @Field(() => [WorkoutWhereInput], {nullable:true})
    AND?: Array<WorkoutWhereInput>;

    @Field(() => [WorkoutWhereInput], {nullable:true})
    OR?: Array<WorkoutWhereInput>;

    @Field(() => [WorkoutWhereInput], {nullable:true})
    NOT?: Array<WorkoutWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    day?: StringFilter;

    @Field(() => ExerciseInWorkoutListRelationFilter, {nullable:true})
    exercises?: ExerciseInWorkoutListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => CoachRelationFilter, {nullable:true})
    coach?: CoachRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    coachId?: IntFilter;

    @Field(() => ClientRelationFilter, {nullable:true})
    client?: ClientRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;
}
