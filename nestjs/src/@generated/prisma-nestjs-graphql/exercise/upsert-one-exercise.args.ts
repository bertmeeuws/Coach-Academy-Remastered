import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseWhereUniqueInput } from './exercise-where-unique.input';
import { ExerciseCreateInput } from './exercise-create.input';
import { ExerciseUpdateInput } from './exercise-update.input';

@ArgsType()
export class UpsertOneExerciseArgs {

    @Field(() => ExerciseWhereUniqueInput, {nullable:false})
    where!: ExerciseWhereUniqueInput;

    @Field(() => ExerciseCreateInput, {nullable:false})
    create!: ExerciseCreateInput;

    @Field(() => ExerciseUpdateInput, {nullable:false})
    update!: ExerciseUpdateInput;
}
