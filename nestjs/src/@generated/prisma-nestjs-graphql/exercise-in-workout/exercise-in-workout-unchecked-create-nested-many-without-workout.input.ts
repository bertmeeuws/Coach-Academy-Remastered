import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateWithoutWorkoutInput } from './exercise-in-workout-create-without-workout.input';
import { ExerciseInWorkoutCreateOrConnectWithoutWorkoutInput } from './exercise-in-workout-create-or-connect-without-workout.input';
import { ExerciseInWorkoutCreateManyWorkoutInputEnvelope } from './exercise-in-workout-create-many-workout-input-envelope.input';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';

@InputType()
export class ExerciseInWorkoutUncheckedCreateNestedManyWithoutWorkoutInput {

    @Field(() => [ExerciseInWorkoutCreateWithoutWorkoutInput], {nullable:true})
    create?: Array<ExerciseInWorkoutCreateWithoutWorkoutInput>;

    @Field(() => [ExerciseInWorkoutCreateOrConnectWithoutWorkoutInput], {nullable:true})
    connectOrCreate?: Array<ExerciseInWorkoutCreateOrConnectWithoutWorkoutInput>;

    @Field(() => ExerciseInWorkoutCreateManyWorkoutInputEnvelope, {nullable:true})
    createMany?: ExerciseInWorkoutCreateManyWorkoutInputEnvelope;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<ExerciseInWorkoutWhereUniqueInput>;
}
