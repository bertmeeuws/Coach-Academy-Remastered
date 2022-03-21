import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateManyWorkoutInput } from './exercise-in-workout-create-many-workout.input';

@InputType()
export class ExerciseInWorkoutCreateManyWorkoutInputEnvelope {

    @Field(() => [ExerciseInWorkoutCreateManyWorkoutInput], {nullable:false})
    data!: Array<ExerciseInWorkoutCreateManyWorkoutInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
