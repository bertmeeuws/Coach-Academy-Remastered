import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithoutCoachInput } from './workout-update-without-coach.input';

@InputType()
export class WorkoutUpdateWithWhereUniqueWithoutCoachInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutUpdateWithoutCoachInput, {nullable:false})
    data!: WorkoutUpdateWithoutCoachInput;
}
