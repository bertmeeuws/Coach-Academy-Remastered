import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateWithoutClientInput } from './workout-create-without-client.input';
import { WorkoutCreateOrConnectWithoutClientInput } from './workout-create-or-connect-without-client.input';
import { WorkoutCreateManyClientInputEnvelope } from './workout-create-many-client-input-envelope.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';

@InputType()
export class WorkoutUncheckedCreateNestedManyWithoutClientInput {

    @Field(() => [WorkoutCreateWithoutClientInput], {nullable:true})
    create?: Array<WorkoutCreateWithoutClientInput>;

    @Field(() => [WorkoutCreateOrConnectWithoutClientInput], {nullable:true})
    connectOrCreate?: Array<WorkoutCreateOrConnectWithoutClientInput>;

    @Field(() => WorkoutCreateManyClientInputEnvelope, {nullable:true})
    createMany?: WorkoutCreateManyClientInputEnvelope;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<WorkoutWhereUniqueInput>;
}
