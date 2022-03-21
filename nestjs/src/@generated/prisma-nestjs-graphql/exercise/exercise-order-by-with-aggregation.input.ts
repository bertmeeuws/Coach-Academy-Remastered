import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExerciseCountOrderByAggregateInput } from './exercise-count-order-by-aggregate.input';
import { ExerciseMaxOrderByAggregateInput } from './exercise-max-order-by-aggregate.input';
import { ExerciseMinOrderByAggregateInput } from './exercise-min-order-by-aggregate.input';

@InputType()
export class ExerciseOrderByWithAggregationInput {

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

    @Field(() => ExerciseCountOrderByAggregateInput, {nullable:true})
    _count?: ExerciseCountOrderByAggregateInput;

    @Field(() => ExerciseMaxOrderByAggregateInput, {nullable:true})
    _max?: ExerciseMaxOrderByAggregateInput;

    @Field(() => ExerciseMinOrderByAggregateInput, {nullable:true})
    _min?: ExerciseMinOrderByAggregateInput;
}
