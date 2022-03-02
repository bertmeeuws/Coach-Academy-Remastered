import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MealCountAggregate } from './meal-count-aggregate.output';
import { MealMinAggregate } from './meal-min-aggregate.output';
import { MealMaxAggregate } from './meal-max-aggregate.output';

@ObjectType()
export class AggregateMeal {

    @Field(() => MealCountAggregate, {nullable:true})
    _count?: MealCountAggregate;

    @Field(() => MealMinAggregate, {nullable:true})
    _min?: MealMinAggregate;

    @Field(() => MealMaxAggregate, {nullable:true})
    _max?: MealMaxAggregate;
}
