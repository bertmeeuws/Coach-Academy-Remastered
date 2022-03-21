import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateWithoutCoachInput } from './workout-create-without-coach.input';
import { WorkoutCreateOrConnectWithoutCoachInput } from './workout-create-or-connect-without-coach.input';
import { WorkoutCreateManyCoachInputEnvelope } from './workout-create-many-coach-input-envelope.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';

@InputType()
export class WorkoutCreateNestedManyWithoutCoachInput {

    @Field(() => [WorkoutCreateWithoutCoachInput], {nullable:true})
    create?: Array<WorkoutCreateWithoutCoachInput>;

    @Field(() => [WorkoutCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<WorkoutCreateOrConnectWithoutCoachInput>;

    @Field(() => WorkoutCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: WorkoutCreateManyCoachInputEnvelope;

    @Field(() => [WorkoutWhereUniqueInput], {nullable:true})
    connect?: Array<WorkoutWhereUniqueInput>;
}
