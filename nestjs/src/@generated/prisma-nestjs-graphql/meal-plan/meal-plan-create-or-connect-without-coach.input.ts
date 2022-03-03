import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanCreateWithoutCoachInput } from './meal-plan-create-without-coach.input';

@InputType()
export class MealPlanCreateOrConnectWithoutCoachInput {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    where!: MealPlanWhereUniqueInput;

    @Field(() => MealPlanCreateWithoutCoachInput, {nullable:false})
    create!: MealPlanCreateWithoutCoachInput;
}
