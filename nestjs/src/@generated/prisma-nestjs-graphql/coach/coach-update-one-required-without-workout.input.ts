import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutWorkoutInput } from './coach-create-without-workout.input';
import { CoachCreateOrConnectWithoutWorkoutInput } from './coach-create-or-connect-without-workout.input';
import { CoachUpsertWithoutWorkoutInput } from './coach-upsert-without-workout.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateWithoutWorkoutInput } from './coach-update-without-workout.input';

@InputType()
export class CoachUpdateOneRequiredWithoutWorkoutInput {

    @Field(() => CoachCreateWithoutWorkoutInput, {nullable:true})
    create?: CoachCreateWithoutWorkoutInput;

    @Field(() => CoachCreateOrConnectWithoutWorkoutInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutWorkoutInput;

    @Field(() => CoachUpsertWithoutWorkoutInput, {nullable:true})
    upsert?: CoachUpsertWithoutWorkoutInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;

    @Field(() => CoachUpdateWithoutWorkoutInput, {nullable:true})
    update?: CoachUpdateWithoutWorkoutInput;
}
