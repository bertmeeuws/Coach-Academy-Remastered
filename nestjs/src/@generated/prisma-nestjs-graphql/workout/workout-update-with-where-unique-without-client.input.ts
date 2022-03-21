import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithoutClientInput } from './workout-update-without-client.input';

@InputType()
export class WorkoutUpdateWithWhereUniqueWithoutClientInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutUpdateWithoutClientInput, {nullable:false})
    data!: WorkoutUpdateWithoutClientInput;
}
