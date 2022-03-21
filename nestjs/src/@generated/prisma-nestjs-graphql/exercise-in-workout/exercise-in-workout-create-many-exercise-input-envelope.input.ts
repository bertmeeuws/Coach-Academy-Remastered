import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateManyExerciseInput } from './exercise-in-workout-create-many-exercise.input';

@InputType()
export class ExerciseInWorkoutCreateManyExerciseInputEnvelope {

    @Field(() => [ExerciseInWorkoutCreateManyExerciseInput], {nullable:false})
    data!: Array<ExerciseInWorkoutCreateManyExerciseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
