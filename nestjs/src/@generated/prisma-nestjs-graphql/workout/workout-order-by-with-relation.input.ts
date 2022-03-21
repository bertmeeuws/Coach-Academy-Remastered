import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExerciseInWorkoutOrderByRelationAggregateInput } from '../exercise-in-workout/exercise-in-workout-order-by-relation-aggregate.input';
import { CoachOrderByWithRelationInput } from '../coach/coach-order-by-with-relation.input';
import { ClientOrderByWithRelationInput } from '../client/client-order-by-with-relation.input';

@InputType()
export class WorkoutOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;

    @Field(() => ExerciseInWorkoutOrderByRelationAggregateInput, {nullable:true})
    exercises?: ExerciseInWorkoutOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => CoachOrderByWithRelationInput, {nullable:true})
    coach?: CoachOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;

    @Field(() => ClientOrderByWithRelationInput, {nullable:true})
    client?: ClientOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;
}
