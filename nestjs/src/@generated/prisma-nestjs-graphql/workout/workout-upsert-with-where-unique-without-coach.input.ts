import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutUpdateWithoutCoachInput } from './workout-update-without-coach.input';
import { WorkoutCreateWithoutCoachInput } from './workout-create-without-coach.input';

@InputType()
export class WorkoutUpsertWithWhereUniqueWithoutCoachInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutUpdateWithoutCoachInput, {nullable:false})
    update!: WorkoutUpdateWithoutCoachInput;

    @Field(() => WorkoutCreateWithoutCoachInput, {nullable:false})
    create!: WorkoutCreateWithoutCoachInput;
}
