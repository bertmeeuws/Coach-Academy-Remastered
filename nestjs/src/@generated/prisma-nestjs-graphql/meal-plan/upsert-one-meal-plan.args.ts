import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanCreateInput } from './meal-plan-create.input';
import { MealPlanUpdateInput } from './meal-plan-update.input';

@ArgsType()
export class UpsertOneMealPlanArgs {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    where!: MealPlanWhereUniqueInput;

    @Field(() => MealPlanCreateInput, {nullable:false})
    create!: MealPlanCreateInput;

    @Field(() => MealPlanUpdateInput, {nullable:false})
    update!: MealPlanUpdateInput;
}
