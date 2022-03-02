import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MEAL_DAY } from '../prisma/meal-day.enum';
import { MealCountAggregate } from './meal-count-aggregate.output';
import { MealMinAggregate } from './meal-min-aggregate.output';
import { MealMaxAggregate } from './meal-max-aggregate.output';

@ObjectType()
export class MealGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    dietplanId!: string;

    @Field(() => MEAL_DAY, {nullable:false})
    day!: keyof typeof MEAL_DAY;

    @Field(() => MealCountAggregate, {nullable:true})
    _count?: MealCountAggregate;

    @Field(() => MealMinAggregate, {nullable:true})
    _min?: MealMinAggregate;

    @Field(() => MealMaxAggregate, {nullable:true})
    _max?: MealMaxAggregate;
}
