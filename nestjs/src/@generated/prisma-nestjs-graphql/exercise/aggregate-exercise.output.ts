import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExerciseCountAggregate } from './exercise-count-aggregate.output';
import { ExerciseMinAggregate } from './exercise-min-aggregate.output';
import { ExerciseMaxAggregate } from './exercise-max-aggregate.output';

@ObjectType()
export class AggregateExercise {

    @Field(() => ExerciseCountAggregate, {nullable:true})
    _count?: ExerciseCountAggregate;

    @Field(() => ExerciseMinAggregate, {nullable:true})
    _min?: ExerciseMinAggregate;

    @Field(() => ExerciseMaxAggregate, {nullable:true})
    _max?: ExerciseMaxAggregate;
}
