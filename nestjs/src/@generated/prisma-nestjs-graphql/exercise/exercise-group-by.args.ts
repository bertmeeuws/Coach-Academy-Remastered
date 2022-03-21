import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseWhereInput } from './exercise-where.input';
import { ExerciseOrderByWithAggregationInput } from './exercise-order-by-with-aggregation.input';
import { ExerciseScalarFieldEnum } from './exercise-scalar-field.enum';
import { ExerciseScalarWhereWithAggregatesInput } from './exercise-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExerciseCountAggregateInput } from './exercise-count-aggregate.input';
import { ExerciseMinAggregateInput } from './exercise-min-aggregate.input';
import { ExerciseMaxAggregateInput } from './exercise-max-aggregate.input';

@ArgsType()
export class ExerciseGroupByArgs {

    @Field(() => ExerciseWhereInput, {nullable:true})
    where?: ExerciseWhereInput;

    @Field(() => [ExerciseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExerciseOrderByWithAggregationInput>;

    @Field(() => [ExerciseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ExerciseScalarFieldEnum>;

    @Field(() => ExerciseScalarWhereWithAggregatesInput, {nullable:true})
    having?: ExerciseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExerciseCountAggregateInput, {nullable:true})
    _count?: ExerciseCountAggregateInput;

    @Field(() => ExerciseMinAggregateInput, {nullable:true})
    _min?: ExerciseMinAggregateInput;

    @Field(() => ExerciseMaxAggregateInput, {nullable:true})
    _max?: ExerciseMaxAggregateInput;
}
