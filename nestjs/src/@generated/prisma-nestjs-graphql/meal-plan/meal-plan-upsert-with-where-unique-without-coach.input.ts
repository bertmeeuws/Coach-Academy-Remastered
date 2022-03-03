import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateWithoutCoachInput } from './meal-plan-update-without-coach.input';
import { MealPlanCreateWithoutCoachInput } from './meal-plan-create-without-coach.input';

@InputType()
export class MealPlanUpsertWithWhereUniqueWithoutCoachInput {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    where!: MealPlanWhereUniqueInput;

    @Field(() => MealPlanUpdateWithoutCoachInput, {nullable:false})
    update!: MealPlanUpdateWithoutCoachInput;

    @Field(() => MealPlanCreateWithoutCoachInput, {nullable:false})
    create!: MealPlanCreateWithoutCoachInput;
}
