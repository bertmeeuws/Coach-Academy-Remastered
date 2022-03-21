import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutCreateWithoutCoachInput } from './workout-create-without-coach.input';

@InputType()
export class WorkoutCreateOrConnectWithoutCoachInput {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutCreateWithoutCoachInput, {nullable:false})
    create!: WorkoutCreateWithoutCoachInput;
}
