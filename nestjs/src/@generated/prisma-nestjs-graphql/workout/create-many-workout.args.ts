import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutCreateManyInput } from './workout-create-many.input';

@ArgsType()
export class CreateManyWorkoutArgs {

    @Field(() => [WorkoutCreateManyInput], {nullable:false})
    data!: Array<WorkoutCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
