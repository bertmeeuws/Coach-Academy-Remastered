import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ExerciseInWorkoutMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    exerciseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workoutId?: keyof typeof SortOrder;
}