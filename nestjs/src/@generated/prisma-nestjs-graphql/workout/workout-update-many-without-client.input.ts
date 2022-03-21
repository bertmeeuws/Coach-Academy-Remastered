import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateWithoutClientInput } from './workout-create-without-client.input';
import { WorkoutCreateOrConnectWithoutClientInput } from './workout-create-or-connect-without-client.input';
import { WorkoutUpsertWithWhereUniqueWithoutClientInput } from './workout-upsert-with-where-unique-without-client.input';
import { WorkoutCreateManyClientInputEnvelope } from './workout-create-many-client-input-envelope.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithWhereUniqueWithoutClientInput } from './workout-update-with-where-unique-without-client.input';
import { WorkoutUpdateManyWithWhereWithoutClientInput } from './workout-update-many-with-where-without-client.input';
import { WorkoutScalarWhereInput } from './workout-scalar-where.input';

@InputType()
export class WorkoutUpdateManyWithoutClientInput {

    @Field(() => [WorkoutCreateWithoutClientInput], {nullable:true})
    create?: Array<WorkoutCreateWithoutClientInput>;

    @Field(() => [WorkoutCreateOrConnectWithoutClientInput], {nullable:true})
    connectOrCreate?: Array<WorkoutCreateOrConnectWithoutClientInput>;

    @Field(() => [WorkoutUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    upsert?: Array<WorkoutUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => WorkoutCreateManyClientInputEnvelope, {nullable:true})
    createMany?: WorkoutCreateManyClientInputEnvelope;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    set?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    disconnect?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    delete?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    update?: Array<WorkoutUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [WorkoutUpdateManyWithWhereWithoutClientInput], {nullable:true})
    updateMany?: Array<WorkoutUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    deleteMany?: Array<WorkoutScalarWhereInput>;
}
