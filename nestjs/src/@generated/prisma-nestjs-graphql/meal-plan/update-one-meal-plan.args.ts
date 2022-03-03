import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanUpdateInput } from './meal-plan-update.input';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';

@ArgsType()
export class UpdateOneMealPlanArgs {

    @Field(() => MealPlanUpdateInput, {nullable:false})
    data!: MealPlanUpdateInput;

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    where!: MealPlanWhereUniqueInput;
}
