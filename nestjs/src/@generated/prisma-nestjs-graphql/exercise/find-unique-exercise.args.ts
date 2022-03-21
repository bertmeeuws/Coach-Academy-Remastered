import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseWhereUniqueInput } from './exercise-where-unique.input';

@ArgsType()
export class FindUniqueExerciseArgs {

    @Field(() => ExerciseWhereUniqueInput, {nullable:false})
    where!: ExerciseWhereUniqueInput;
}
