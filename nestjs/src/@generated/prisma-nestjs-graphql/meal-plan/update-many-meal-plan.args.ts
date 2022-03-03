import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanUpdateManyMutationInput } from './meal-plan-update-many-mutation.input';
import { MealPlanWhereInput } from './meal-plan-where.input';

@ArgsType()
export class UpdateManyMealPlanArgs {

    @Field(() => MealPlanUpdateManyMutationInput, {nullable:false})
    data!: MealPlanUpdateManyMutationInput;

    @Field(() => MealPlanWhereInput, {nullable:true})
    where?: MealPlanWhereInput;
}
