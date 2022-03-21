import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateWithoutCoachInput } from './workout-create-without-coach.input';
import { WorkoutCreateOrConnectWithoutCoachInput } from './workout-create-or-connect-without-coach.input';
import { WorkoutUpsertWithWhereUniqueWithoutCoachInput } from './workout-upsert-with-where-unique-without-coach.input';
import { WorkoutCreateManyCoachInputEnvelope } from './workout-create-many-coach-input-envelope.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithWhereUniqueWithoutCoachInput } from './workout-update-with-where-unique-without-coach.input';
import { WorkoutUpdateManyWithWhereWithoutCoachInput } from './workout-update-many-with-where-without-coach.input';
import { WorkoutScalarWhereInput } from './workout-scalar-where.input';

@InputType()
export class WorkoutUncheckedUpdateManyWithoutCoachInput {

    @Field(() => [WorkoutCreateWithoutCoachInput], {nullable:true})
    create?: Array<WorkoutCreateWithoutCoachInput>;

    @Field(() => [WorkoutCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<WorkoutCreateOrConnectWithoutCoachInput>;

    @Field(() => [WorkoutUpsertWithWhereUniqueWithoutCoachInput], {nullable:true})
    upsert?: Array<WorkoutUpsertWithWhereUniqueWithoutCoachInput>;

    @Field(() => WorkoutCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: WorkoutCreateManyCoachInputEnvelope;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    set?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    disconnect?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    delete?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<WorkoutWhereUniqueInput>;

    @Field(() => [WorkoutUpdateWithWhereUniqueWithoutCoachInput], {nullable:true})
    update?: Array<WorkoutUpdateWithWhereUniqueWithoutCoachInput>;

    @Field(() => [WorkoutUpdateManyWithWhereWithoutCoachInput], {nullable:true})
    updateMany?: Array<WorkoutUpdateManyWithWhereWithoutCoachInput>;

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    deleteMany?: Array<WorkoutScalarWhereInput>;
}
