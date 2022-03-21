import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateWithoutExerciseInput } from './exercise-in-workout-create-without-exercise.input';
import { ExerciseInWorkoutCreateOrConnectWithoutExerciseInput } from './exercise-in-workout-create-or-connect-without-exercise.input';
import { ExerciseInWorkoutCreateManyExerciseInputEnvelope } from './exercise-in-workout-create-many-exercise-input-envelope.input';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';

@InputType()
export class ExerciseInWorkoutUncheckedCreateNestedManyWithoutExerciseInput {

    @Field(() => [ExerciseInWorkoutCreateWithoutExerciseInput], {nullable:true})
    create?: Array<ExerciseInWorkoutCreateWithoutExerciseInput>;

    @Field(() => [ExerciseInWorkoutCreateOrConnectWithoutExerciseInput], {nullable:true})
    connectOrCreate?: Array<ExerciseInWorkoutCreateOrConnectWithoutExerciseInput>;

    @Field(() => ExerciseInWorkoutCreateManyExerciseInputEnvelope, {nullable:true})
    createMany?: ExerciseInWorkoutCreateManyExerciseInputEnvelope;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<ExerciseInWorkoutWhereUniqueInput>;
}
