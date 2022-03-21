import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateWithoutExerciseInput } from './exercise-in-workout-create-without-exercise.input';
import { ExerciseInWorkoutCreateOrConnectWithoutExerciseInput } from './exercise-in-workout-create-or-connect-without-exercise.input';
import { ExerciseInWorkoutUpsertWithWhereUniqueWithoutExerciseInput } from './exercise-in-workout-upsert-with-where-unique-without-exercise.input';
import { ExerciseInWorkoutCreateManyExerciseInputEnvelope } from './exercise-in-workout-create-many-exercise-input-envelope.input';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutUpdateWithWhereUniqueWithoutExerciseInput } from './exercise-in-workout-update-with-where-unique-without-exercise.input';
import { ExerciseInWorkoutUpdateManyWithWhereWithoutExerciseInput } from './exercise-in-workout-update-many-with-where-without-exercise.input';
import { ExerciseInWorkoutScalarWhereInput } from './exercise-in-workout-scalar-where.input';

@InputType()
export class ExerciseInWorkoutUncheckedUpdateManyWithoutExerciseInput {

    @Field(() => [ExerciseInWorkoutCreateWithoutExerciseInput], {nullable:true})
    create?: Array<ExerciseInWorkoutCreateWithoutExerciseInput>;

    @Field(() => [ExerciseInWorkoutCreateOrConnectWithoutExerciseInput], {nullable:true})
    connectOrCreate?: Array<ExerciseInWorkoutCreateOrConnectWithoutExerciseInput>;

    @Field(() => [ExerciseInWorkoutUpsertWithWhereUniqueWithoutExerciseInput], {nullable:true})
    upsert?: Array<ExerciseInWorkoutUpsertWithWhereUniqueWithoutExerciseInput>;

    @Field(() => ExerciseInWorkoutCreateManyExerciseInputEnvelope, {nullable:true})
    createMany?: ExerciseInWorkoutCreateManyExerciseInputEnvelope;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    set?: Array<ExerciseInWorkoutWhereUniqueInput>;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    disconnect?: Array<ExerciseInWorkoutWhereUniqueInput>;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    delete?: Array<ExerciseInWorkoutWhereUniqueInput>;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<ExerciseInWorkoutWhereUniqueInput>;

    @Field(() => [ExerciseInWorkoutUpdateWithWhereUniqueWithoutExerciseInput], {nullable:true})
    update?: Array<ExerciseInWorkoutUpdateWithWhereUniqueWithoutExerciseInput>;

    @Field(() => [ExerciseInWorkoutUpdateManyWithWhereWithoutExerciseInput], {nullable:true})
    updateMany?: Array<ExerciseInWorkoutUpdateManyWithWhereWithoutExerciseInput>;

    @Field(() => [ExerciseInWorkoutScalarWhereInput], {nullable:true})
    deleteMany?: Array<ExerciseInWorkoutScalarWhereInput>;
}
