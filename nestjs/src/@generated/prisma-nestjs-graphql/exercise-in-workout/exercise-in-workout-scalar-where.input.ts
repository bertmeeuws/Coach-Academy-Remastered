import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ExerciseInWorkoutScalarWhereInput {

    @Field(() => [ExerciseInWorkoutScalarWhereInput], {nullable:true})
    AND?: Array<ExerciseInWorkoutScalarWhereInput>;

    @Field(() => [ExerciseInWorkoutScalarWhereInput], {nullable:true})
    OR?: Array<ExerciseInWorkoutScalarWhereInput>;

    @Field(() => [ExerciseInWorkoutScalarWhereInput], {nullable:true})
    NOT?: Array<ExerciseInWorkoutScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    exerciseId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    meta?: JsonFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    workoutId?: StringNullableFilter;
}
