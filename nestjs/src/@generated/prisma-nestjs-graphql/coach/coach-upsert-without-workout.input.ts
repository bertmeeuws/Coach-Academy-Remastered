import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachUpdateWithoutWorkoutInput } from './coach-update-without-workout.input';
import { CoachCreateWithoutWorkoutInput } from './coach-create-without-workout.input';

@InputType()
export class CoachUpsertWithoutWorkoutInput {

    @Field(() => CoachUpdateWithoutWorkoutInput, {nullable:false})
    update!: CoachUpdateWithoutWorkoutInput;

    @Field(() => CoachCreateWithoutWorkoutInput, {nullable:false})
    create!: CoachCreateWithoutWorkoutInput;
}
