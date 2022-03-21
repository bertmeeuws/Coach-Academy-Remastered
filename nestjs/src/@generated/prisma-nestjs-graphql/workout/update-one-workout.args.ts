import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutUpdateInput } from './workout-update.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';

@ArgsType()
export class UpdateOneWorkoutArgs {

    @Field(() => WorkoutUpdateInput, {nullable:false})
    data!: WorkoutUpdateInput;

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;
}
