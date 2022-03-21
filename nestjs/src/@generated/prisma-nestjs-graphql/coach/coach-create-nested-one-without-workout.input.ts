import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutWorkoutInput } from './coach-create-without-workout.input';
import { CoachCreateOrConnectWithoutWorkoutInput } from './coach-create-or-connect-without-workout.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachCreateNestedOneWithoutWorkoutInput {

    @Field(() => CoachCreateWithoutWorkoutInput, {nullable:true})
    create?: CoachCreateWithoutWorkoutInput;

    @Field(() => CoachCreateOrConnectWithoutWorkoutInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutWorkoutInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;
}
