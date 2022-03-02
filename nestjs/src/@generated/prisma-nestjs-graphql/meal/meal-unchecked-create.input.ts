import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MEAL_DAY } from '../prisma/meal-day.enum';

@InputType()
export class MealUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    dietplanId!: string;

    @Field(() => MEAL_DAY, {nullable:false})
    day!: keyof typeof MEAL_DAY;
}
