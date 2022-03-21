import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutWhereInput } from './workout-where.input';

@ArgsType()
export class DeleteManyWorkoutArgs {

    @Field(() => WorkoutWhereInput, {nullable:true})
    where?: WorkoutWhereInput;
}
