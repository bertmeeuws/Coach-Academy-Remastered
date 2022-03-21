import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from '../prisma/muscle-group.enum';
import { ExerciseCreatesecondary_musclesInput } from '../prisma/exercise-createsecondary-muscles.input';
import { ExerciseInWorkoutUncheckedCreateNestedManyWithoutExerciseInput } from '../exercise-in-workout/exercise-in-workout-unchecked-create-nested-many-without-exercise.input';

@InputType()
export class ExerciseUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => MUSCLE_GROUP, {nullable:false})
    primary_muscle!: keyof typeof MUSCLE_GROUP;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    video?: string;

    @Field(() => ExerciseCreatesecondary_musclesInput, {nullable:true})
    secondary_muscles?: ExerciseCreatesecondary_musclesInput;

    @Field(() => ExerciseInWorkoutUncheckedCreateNestedManyWithoutExerciseInput, {nullable:true})
    ExerciseInWorkout?: ExerciseInWorkoutUncheckedCreateNestedManyWithoutExerciseInput;
}