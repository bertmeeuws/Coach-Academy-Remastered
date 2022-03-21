import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutWorkoutInput } from './client-create-without-workout.input';
import { ClientCreateOrConnectWithoutWorkoutInput } from './client-create-or-connect-without-workout.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientCreateNestedOneWithoutWorkoutInput {

    @Field(() => ClientCreateWithoutWorkoutInput, {nullable:true})
    create?: ClientCreateWithoutWorkoutInput;

    @Field(() => ClientCreateOrConnectWithoutWorkoutInput, {nullable:true})
    connectOrCreate?: ClientCreateOrConnectWithoutWorkoutInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    connect?: ClientWhereUniqueInput;
}
