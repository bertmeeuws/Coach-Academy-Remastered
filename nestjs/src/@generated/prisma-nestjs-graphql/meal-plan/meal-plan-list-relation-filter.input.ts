import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanWhereInput } from './meal-plan-where.input';

@InputType()
export class MealPlanListRelationFilter {

    @Field(() => MealPlanWhereInput, {nullable:true})
    every?: MealPlanWhereInput;

    @Field(() => MealPlanWhereInput, {nullable:true})
    some?: MealPlanWhereInput;

    @Field(() => MealPlanWhereInput, {nullable:true})
    none?: MealPlanWhereInput;
}
