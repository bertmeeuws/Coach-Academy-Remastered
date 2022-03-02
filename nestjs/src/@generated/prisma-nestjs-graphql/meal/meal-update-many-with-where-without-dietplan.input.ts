import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealScalarWhereInput } from './meal-scalar-where.input';
import { MealUpdateManyMutationInput } from './meal-update-many-mutation.input';

@InputType()
export class MealUpdateManyWithWhereWithoutDietplanInput {

    @Field(() => MealScalarWhereInput, {nullable:false})
    where!: MealScalarWhereInput;

    @Field(() => MealUpdateManyMutationInput, {nullable:false})
    data!: MealUpdateManyMutationInput;
}
