import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseWhereInput } from './exercise-where.input';

@ArgsType()
export class DeleteManyExerciseArgs {

    @Field(() => ExerciseWhereInput, {nullable:true})
    where?: ExerciseWhereInput;
}
