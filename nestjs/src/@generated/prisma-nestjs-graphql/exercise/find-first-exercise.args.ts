import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseWhereInput } from './exercise-where.input';
import { ExerciseOrderByWithRelationInput } from './exercise-order-by-with-relation.input';
import { ExerciseWhereUniqueInput } from './exercise-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExerciseScalarFieldEnum } from './exercise-scalar-field.enum';

@ArgsType()
export class FindFirstExerciseArgs {

    @Field(() => ExerciseWhereInput, {nullable:true})
    where?: ExerciseWhereInput;

    @Field(() => [ExerciseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExerciseOrderByWithRelationInput>;

    @Field(() => ExerciseWhereUniqueInput, {nullable:true})
    cursor?: ExerciseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExerciseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExerciseScalarFieldEnum>;
}
