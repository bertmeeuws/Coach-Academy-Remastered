import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateWithoutCoachInput } from './meal-plan-update-without-coach.input';

@InputType()
export class MealPlanUpdateWithWhereUniqueWithoutCoachInput {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    where!: MealPlanWhereUniqueInput;

    @Field(() => MealPlanUpdateWithoutCoachInput, {nullable:false})
    data!: MealPlanUpdateWithoutCoachInput;
}
