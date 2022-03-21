import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientCreateWithoutWorkoutInput } from './client-create-without-workout.input';

@InputType()
export class ClientCreateOrConnectWithoutWorkoutInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateWithoutWorkoutInput, {nullable:false})
    create!: ClientCreateWithoutWorkoutInput;
}
