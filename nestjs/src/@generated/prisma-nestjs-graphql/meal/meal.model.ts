import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Dietplan } from '../dietplan/dietplan.model';
import { MEAL_DAY } from '../prisma/meal-day.enum';
import { FoodItem } from '../food-item/food-item.model';
import { MealCount } from './meal-count.output';

@ObjectType()
export class Meal {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Dietplan, {nullable:false})
    dietplan?: Dietplan;

    @Field(() => String, {nullable:false})
    dietplanId!: string;

    @Field(() => MEAL_DAY, {nullable:false})
    day!: keyof typeof MEAL_DAY;

    @Field(() => [FoodItem], {nullable:true})
    foods?: Array<FoodItem>;

    @Field(() => MealCount, {nullable:false})
    _count?: MealCount;
}
