import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutCreateWithoutClientInput } from './workout-create-without-client.input';

@InputType()
export class WorkoutCreateOrConnectWithoutClientInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutCreateWithoutClientInput, {nullable:false})
    create!: WorkoutCreateWithoutClientInput;
}
