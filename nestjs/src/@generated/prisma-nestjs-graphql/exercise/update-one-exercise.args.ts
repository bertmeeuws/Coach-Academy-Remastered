import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseUpdateInput } from './exercise-update.input';
import { ExerciseWhereUniqueInput } from './exercise-where-unique.input';

@ArgsType()
export class UpdateOneExerciseArgs {

    @Field(() => ExerciseUpdateInput, {nullable:false})
    data!: ExerciseUpdateInput;

    @Field(() => ExerciseWhereUniqueInput, {nullable:false})
    where!: ExerciseWhereUniqueInput;
}
