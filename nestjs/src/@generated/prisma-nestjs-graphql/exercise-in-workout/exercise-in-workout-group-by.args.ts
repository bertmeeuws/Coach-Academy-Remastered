import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseInWorkoutWhereInput } from './exercise-in-workout-where.input';
import { ExerciseInWorkoutOrderByWithAggregationInput } from './exercise-in-workout-order-by-with-aggregation.input';
import { ExerciseInWorkoutScalarFieldEnum } from './exercise-in-workout-scalar-field.enum';
import { ExerciseInWorkoutScalarWhereWithAggregatesInput } from './exercise-in-workout-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExerciseInWorkoutCountAggregateInput } from './exercise-in-workout-count-aggregate.input';
import { ExerciseInWorkoutAvgAggregateInput } from './exercise-in-workout-avg-aggregate.input';
import { ExerciseInWorkoutSumAggregateInput } from './exercise-in-workout-sum-aggregate.input';
import { ExerciseInWorkoutMinAggregateInput } from './exercise-in-workout-min-aggregate.input';
import { ExerciseInWorkoutMaxAggregateInput } from './exercise-in-workout-max-aggregate.input';

@ArgsType()
export class ExerciseInWorkoutGroupByArgs {

    @Field(() => ExerciseInWorkoutWhereInput, {nullable:true})
    where?: ExerciseInWorkoutWhereInput;

    @Field(() => [ExerciseInWorkoutOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExerciseInWorkoutOrderByWithAggregationInput>;

    @Field(() => [ExerciseInWorkoutScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ExerciseInWorkoutScalarFieldEnum>;

    @Field(() => ExerciseInWorkoutScalarWhereWithAggregatesInput, {nullable:true})
    having?: ExerciseInWorkoutScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExerciseInWorkoutCountAggregateInput, {nullable:true})
    _count?: ExerciseInWorkoutCountAggregateInput;

    @Field(() => ExerciseInWorkoutAvgAggregateInput, {nullable:true})
    _avg?: ExerciseInWorkoutAvgAggregateInput;

    @Field(() => ExerciseInWorkoutSumAggregateInput, {nullable:true})
    _sum?: ExerciseInWorkoutSumAggregateInput;

    @Field(() => ExerciseInWorkoutMinAggregateInput, {nullable:true})
    _min?: ExerciseInWorkoutMinAggregateInput;

    @Field(() => ExerciseInWorkoutMaxAggregateInput, {nullable:true})
    _max?: ExerciseInWorkoutMaxAggregateInput;
}
