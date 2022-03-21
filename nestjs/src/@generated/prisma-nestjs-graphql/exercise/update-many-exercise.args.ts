import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseUpdateManyMutationInput } from './exercise-update-many-mutation.input';
import { ExerciseWhereInput } from './exercise-where.input';

@ArgsType()
export class UpdateManyExerciseArgs {

    @Field(() => ExerciseUpdateManyMutationInput, {nullable:false})
    data!: ExerciseUpdateManyMutationInput;

    @Field(() => ExerciseWhereInput, {nullable:true})
    where?: ExerciseWhereInput;
}
