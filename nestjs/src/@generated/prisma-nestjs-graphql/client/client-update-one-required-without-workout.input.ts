import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutWorkoutInput } from './client-create-without-workout.input';
import { ClientCreateOrConnectWithoutWorkoutInput } from './client-create-or-connect-without-workout.input';
import { ClientUpsertWithoutWorkoutInput } from './client-upsert-without-workout.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutWorkoutInput } from './client-update-without-workout.input';

@InputType()
export class ClientUpdateOneRequiredWithoutWorkoutInput {

    @Field(() => ClientCreateWithoutWorkoutInput, {nullable:true})
    create?: ClientCreateWithoutWorkoutInput;

    @Field(() => ClientCreateOrConnectWithoutWorkoutInput, {nullable:true})
    connectOrCreate?: ClientCreateOrConnectWithoutWorkoutInput;

    @Field(() => ClientUpsertWithoutWorkoutInput, {nullable:true})
    upsert?: ClientUpsertWithoutWorkoutInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    connect?: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutWorkoutInput, {nullable:true})
    update?: ClientUpdateWithoutWorkoutInput;
}
