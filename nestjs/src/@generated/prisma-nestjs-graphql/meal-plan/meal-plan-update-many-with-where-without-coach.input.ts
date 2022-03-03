import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanScalarWhereInput } from './meal-plan-scalar-where.input';
import { MealPlanUpdateManyMutationInput } from './meal-plan-update-many-mutation.input';

@InputType()
export class MealPlanUpdateManyWithWhereWithoutCoachInput {

    @Field(() => MealPlanScalarWhereInput, {nullable:false})
    where!: MealPlanScalarWhereInput;

    @Field(() => MealPlanUpdateManyMutationInput, {nullable:false})
    data!: MealPlanUpdateManyMutationInput;
}
