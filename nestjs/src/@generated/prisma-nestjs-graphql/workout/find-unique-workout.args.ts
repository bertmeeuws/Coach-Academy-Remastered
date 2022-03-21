import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';

@ArgsType()
export class FindUniqueWorkoutArgs {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;
}
