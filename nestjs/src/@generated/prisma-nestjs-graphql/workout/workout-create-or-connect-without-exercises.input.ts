import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutCreateWithoutExercisesInput } from './workout-create-without-exercises.input';

@InputType()
export class WorkoutCreateOrConnectWithoutExercisesInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutCreateWithoutExercisesInput, {nullable:false})
    create!: WorkoutCreateWithoutExercisesInput;
}
