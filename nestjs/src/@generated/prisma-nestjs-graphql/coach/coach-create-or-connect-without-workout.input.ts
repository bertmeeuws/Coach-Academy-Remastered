import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachCreateWithoutWorkoutInput } from './coach-create-without-workout.input';

@InputType()
export class CoachCreateOrConnectWithoutWorkoutInput {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    where!: CoachWhereUniqueInput;

    @Field(() => CoachCreateWithoutWorkoutInput, {nullable:false})
    create!: CoachCreateWithoutWorkoutInput;
}
