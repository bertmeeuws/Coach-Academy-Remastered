import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUpdateWithoutWorkoutInput } from './client-update-without-workout.input';
import { ClientCreateWithoutWorkoutInput } from './client-create-without-workout.input';

@InputType()
export class ClientUpsertWithoutWorkoutInput {

    @Field(() => ClientUpdateWithoutWorkoutInput, {nullable:false})
    update!: ClientUpdateWithoutWorkoutInput;

    @Field(() => ClientCreateWithoutWorkoutInput, {nullable:false})
    create!: ClientCreateWithoutWorkoutInput;
}
