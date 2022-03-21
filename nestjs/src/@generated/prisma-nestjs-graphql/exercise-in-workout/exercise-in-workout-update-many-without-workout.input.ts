import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseInWorkoutCreateWithoutWorkoutInput } from './exercise-in-workout-create-without-workout.input';
import { ExerciseInWorkoutCreateOrConnectWithoutWorkoutInput } from './exercise-in-workout-create-or-connect-without-workout.input';
import { ExerciseInWorkoutUpsertWithWhereUniqueWithoutWorkoutInput } from './exercise-in-workout-upsert-with-where-unique-without-workout.input';
import { ExerciseInWorkoutCreateManyWorkoutInputEnvelope } from './exercise-in-workout-create-many-workout-input-envelope.input';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { ExerciseInWorkoutUpdateWithWhereUniqueWithoutWorkoutInput } from './exercise-in-workout-update-with-where-unique-without-workout.input';
import { ExerciseInWorkoutUpdateManyWithWhereWithoutWorkoutInput } from './exercise-in-workout-update-many-with-where-without-workout.input';
import { ExerciseInWorkoutScalarWhereInput } from './exercise-in-workout-scalar-where.input';

@InputType()
export class ExerciseInWorkoutUpdateManyWithoutWorkoutInput {

    @Field(() => [ExerciseInWorkoutCreateWithoutWorkoutInput], {nullable:true})
    create?: Array<ExerciseInWorkoutCreateWithoutWorkoutInput>;

    @Field(() => [ExerciseInWorkoutCreateOrConnectWithoutWorkoutInput], {nullable:true})
    connectOrCreate?: Array<ExerciseInWorkoutCreateOrConnectWithoutWorkoutInput>;

    @Field(() => [ExerciseInWorkoutUpsertWithWhereUniqueWithoutWorkoutInput], {nullable:true})
    upsert?: Array<ExerciseInWorkoutUpsertWithWhereUniqueWithoutWorkoutInput>;

    @Field(() => ExerciseInWorkoutCreateManyWorkoutInputEnvelope, {nullable:true})
    createMany?: ExerciseInWorkoutCreateManyWorkoutInputEnvelope;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    set?: Array<ExerciseInWorkoutWhereUniqueInput>;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    disconnect?: Array<ExerciseInWorkoutWhereUniqueInput>;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    delete?: Array<ExerciseInWorkoutWhereUniqueInput>;

    @Field(() => [ExerciseInWorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<ExerciseInWorkoutWhereUniqueInput>;

    @Field(() => [ExerciseInWorkoutUpdateWithWhereUniqueWithoutWorkoutInput], {nullable:true})
    update?: Array<ExerciseInWorkoutUpdateWithWhereUniqueWithoutWorkoutInput>;

    @Field(() => [ExerciseInWorkoutUpdateManyWithWhereWithoutWorkoutInput], {nullable:true})
    updateMany?: Array<ExerciseInWorkoutUpdateManyWithWhereWithoutWorkoutInput>;

    @Field(() => [ExerciseInWorkoutScalarWhereInput], {nullable:true})
    deleteMany?: Array<ExerciseInWorkoutScalarWhereInput>;
}
