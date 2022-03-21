import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExerciseInWorkoutOrderByRelationAggregateInput } from '../exercise-in-workout/exercise-in-workout-order-by-relation-aggregate.input';

@InputType()
export class ExerciseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    primary_muscle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    video?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secondary_muscles?: keyof typeof SortOrder;

    @Field(() => ExerciseInWorkoutOrderByRelationAggregateInput, {nullable:true})
    ExerciseInWorkout?: ExerciseInWorkoutOrderByRelationAggregateInput;
}
