import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MEAL_DAY } from '../prisma/meal-day.enum';

@ObjectType()
export class MealMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    dietplanId?: string;

    @Field(() => MEAL_DAY, {nullable:true})
    day?: keyof typeof MEAL_DAY;
}
