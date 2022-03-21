import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutUpdateManyMutationInput } from './workout-update-many-mutation.input';
import { WorkoutWhereInput } from './workout-where.input';

@ArgsType()
export class UpdateManyWorkoutArgs {

    @Field(() => WorkoutUpdateManyMutationInput, {nullable:false})
    data!: WorkoutUpdateManyMutationInput;

    @Field(() => WorkoutWhereInput, {nullable:true})
    where?: WorkoutWhereInput;
}
