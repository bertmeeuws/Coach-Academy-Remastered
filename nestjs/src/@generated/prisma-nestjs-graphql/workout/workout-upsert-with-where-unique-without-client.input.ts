import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithoutClientInput } from './workout-update-without-client.input';
import { WorkoutCreateWithoutClientInput } from './workout-create-without-client.input';

@InputType()
export class WorkoutUpsertWithWhereUniqueWithoutClientInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutUpdateWithoutClientInput, {nullable:false})
    update!: WorkoutUpdateWithoutClientInput;

    @Field(() => WorkoutCreateWithoutClientInput, {nullable:false})
    create!: WorkoutCreateWithoutClientInput;
}
