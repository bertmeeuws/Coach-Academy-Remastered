import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateWithoutExercisesInput } from './workout-create-without-exercises.input';
import { WorkoutCreateOrConnectWithoutExercisesInput } from './workout-create-or-connect-without-exercises.input';
import { WorkoutUpsertWithoutExercisesInput } from './workout-upsert-without-exercises.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithoutExercisesInput } from './workout-update-without-exercises.input';

@InputType()
export class WorkoutUpdateOneWithoutExercisesInput {

    @Field(() => WorkoutCreateWithoutExercisesInput, {nullable:true})
    create?: WorkoutCreateWithoutExercisesInput;

    @Field(() => WorkoutCreateOrConnectWithoutExercisesInput, {nullable:true})
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput;

    @Field(() => WorkoutUpsertWithoutExercisesInput, {nullable:true})
    upsert?: WorkoutUpsertWithoutExercisesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WorkoutWhereUniqueInput, {nullable:true})
    connect?: WorkoutWhereUniqueInput;

    @Field(() => WorkoutUpdateWithoutExercisesInput, {nullable:true})
    update?: WorkoutUpdateWithoutExercisesInput;
}
