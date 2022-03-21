import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExerciseOrderByWithRelationInput } from '../exercise/exercise-order-by-with-relation.input';
import { WorkoutOrderByWithRelationInput } from '../workout/workout-order-by-with-relation.input';

@InputType()
export class ExerciseInWorkoutOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ExerciseOrderByWithRelationInput, {nullable:true})
    exercise?: ExerciseOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    exerciseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta?: keyof typeof SortOrder;

    @Field(() => WorkoutOrderByWithRelationInput, {nullable:true})
    Workout?: WorkoutOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    workoutId?: keyof typeof SortOrder;
}
