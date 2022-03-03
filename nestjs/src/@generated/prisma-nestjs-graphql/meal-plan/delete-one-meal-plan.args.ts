import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';

@ArgsType()
export class DeleteOneMealPlanArgs {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    where!: MealPlanWhereUniqueInput;
}
