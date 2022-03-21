import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { WorkoutCreateInput } from './workout-create.input';
import { WorkoutUpdateInput } from './workout-update.input';

@ArgsType()
export class UpsertOneWorkoutArgs {

    @Field(() => WorkoutWhereUniqueInput, {nullable:false})
    where!: WorkoutWhereUniqueInput;

    @Field(() => WorkoutCreateInput, {nullable:false})
    create!: WorkoutCreateInput;

    @Field(() => WorkoutUpdateInput, {nullable:false})
    update!: WorkoutUpdateInput;
}
