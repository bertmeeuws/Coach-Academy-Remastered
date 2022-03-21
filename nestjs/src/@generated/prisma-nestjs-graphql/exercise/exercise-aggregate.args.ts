import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExerciseWhereInput } from './exercise-where.input';
import { ExerciseOrderByWithRelationInput } from './exercise-order-by-with-relation.input';
import { ExerciseWhereUniqueInput } from './exercise-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExerciseCountAggregateInput } from './exercise-count-aggregate.input';
import { ExerciseMinAggregateInput } from './exercise-min-aggregate.input';
import { ExerciseMaxAggregateInput } from './exercise-max-aggregate.input';

@ArgsType()
export class ExerciseAggregateArgs {

    @Field(() => ExerciseWhereInput, {nullable:true})
    where?: ExerciseWhereInput;

    @Field(() => [ExerciseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExerciseOrderByWithRelationInput>;

    @Field(() => ExerciseWhereUniqueInput, {nullable:true})
    cursor?: ExerciseWhereUniqueInput;

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
