import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateWithoutExercisesInput } from './workout-create-without-exercises.input';
import { WorkoutCreateOrConnectWithoutExercisesInput } from './workout-create-or-connect-without-exercises.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';

@InputType()
export class WorkoutCreateNestedOneWithoutExercisesInput {

    @Field(() => WorkoutCreateWithoutExercisesInput, {nullable:true})
    create?: WorkoutCreateWithoutExercisesInput;

    @Field(() => WorkoutCreateOrConnectWithoutExercisesInput, {nullable:true})
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput;

    @Field(() => WorkoutWhereUniqueInput, {nullable:true})
    connect?: WorkoutWhereUniqueInput;
}
