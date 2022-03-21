import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutCreateInput } from './workout-create.input';

@ArgsType()
export class CreateOneWorkoutArgs {

    @Field(() => WorkoutCreateInput, {nullable:false})
    data!: WorkoutCreateInput;
}
