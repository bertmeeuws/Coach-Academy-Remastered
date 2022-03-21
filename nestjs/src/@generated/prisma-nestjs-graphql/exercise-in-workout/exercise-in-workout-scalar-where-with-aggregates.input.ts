import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ExerciseInWorkoutScalarWhereWithAggregatesInput {

    @Field(() => [ExerciseInWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExerciseInWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [ExerciseInWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExerciseInWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [ExerciseInWorkoutScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExerciseInWorkoutScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    exerciseId?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    meta?: JsonWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    workoutId?: StringNullableWithAggregatesFilter;
}
