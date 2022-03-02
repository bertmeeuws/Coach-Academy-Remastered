import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MEAL_DAY } from '../prisma/meal-day.enum';

@InputType()
export class MealCreateManyDietplanInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MEAL_DAY, {nullable:false})
    day!: keyof typeof MEAL_DAY;
}
