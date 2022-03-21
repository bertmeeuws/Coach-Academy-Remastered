import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExerciseInWorkoutCountOrderByAggregateInput } from './exercise-in-workout-count-order-by-aggregate.input';
import { ExerciseInWorkoutAvgOrderByAggregateInput } from './exercise-in-workout-avg-order-by-aggregate.input';
import { ExerciseInWorkoutMaxOrderByAggregateInput } from './exercise-in-workout-max-order-by-aggregate.input';
import { ExerciseInWorkoutMinOrderByAggregateInput } from './exercise-in-workout-min-order-by-aggregate.input';
import { ExerciseInWorkoutSumOrderByAggregateInput } from './exercise-in-workout-sum-order-by-aggregate.input';

@InputType()
export class ExerciseInWorkoutOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    exerciseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workoutId?: keyof typeof SortOrder;

    @Field(() => ExerciseInWorkoutCountOrderByAggregateInput, {nullable:true})
    _count?: ExerciseInWorkoutCountOrderByAggregateInput;

    @Field(() => ExerciseInWorkoutAvgOrderByAggregateInput, {nullable:true})
    _avg?: ExerciseInWorkoutAvgOrderByAggregateInput;

    @Field(() => ExerciseInWorkoutMaxOrderByAggregateInput, {nullable:true})
    _max?: ExerciseInWorkoutMaxOrderByAggregateInput;

    @Field(() => ExerciseInWorkoutMinOrderByAggregateInput, {nullable:true})
    _min?: ExerciseInWorkoutMinOrderByAggregateInput;

    @Field(() => ExerciseInWorkoutSumOrderByAggregateInput, {nullable:true})
    _sum?: ExerciseInWorkoutSumOrderByAggregateInput;
}
