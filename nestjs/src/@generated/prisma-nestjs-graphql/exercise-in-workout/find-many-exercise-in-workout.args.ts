import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereInput } from './exercise-in-workout-where.input';
import { ExerciseInWorkoutOrderByWithRelationInput } from './exercise-in-workout-order-by-with-relation.input';
import { ExerciseInWorkoutWhereUniqueInput } from './exercise-in-workout-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExerciseInWorkoutScalarFieldEnum } from './exercise-in-workout-scalar-field.enum';

@ArgsType()
export class FindManyExerciseInWorkoutArgs {

    @Field(() => ExerciseInWorkoutWhereInput, {nullable:true})
    where?: ExerciseInWorkoutWhereInput;

    @Field(() => [ExerciseInWorkoutOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExerciseInWorkoutOrderByWithRelationInput>;

    @Field(() => ExerciseInWorkoutWhereUniqueInput, {nullable:true})
    cursor?: ExerciseInWorkoutWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExerciseInWorkoutScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExerciseInWorkoutScalarFieldEnum>;
}
