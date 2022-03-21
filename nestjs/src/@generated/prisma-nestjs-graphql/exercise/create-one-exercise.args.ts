import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseCreateInput } from './exercise-create.input';

@ArgsType()
export class CreateOneExerciseArgs {

    @Field(() => ExerciseCreateInput, {nullable:false})
    data!: ExerciseCreateInput;
}
