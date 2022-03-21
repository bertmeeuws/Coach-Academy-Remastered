import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseCreateManyInput } from './exercise-create-many.input';

@ArgsType()
export class CreateManyExerciseArgs {

    @Field(() => [ExerciseCreateManyInput], {nullable:false})
    data!: Array<ExerciseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
