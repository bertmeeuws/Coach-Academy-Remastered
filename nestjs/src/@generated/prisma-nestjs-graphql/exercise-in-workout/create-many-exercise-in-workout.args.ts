import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateManyInput } from './exercise-in-workout-create-many.input';

@ArgsType()
export class CreateManyExerciseInWorkoutArgs {

    @Field(() => [ExerciseInWorkoutCreateManyInput], {nullable:false})
    data!: Array<ExerciseInWorkoutCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
