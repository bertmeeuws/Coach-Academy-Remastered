import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealUpdateManyMutationInput } from './meal-update-many-mutation.input';
import { MealWhereInput } from './meal-where.input';

@ArgsType()
export class UpdateManyMealArgs {

    @Field(() => MealUpdateManyMutationInput, {nullable:false})
    data!: MealUpdateManyMutationInput;

    @Field(() => MealWhereInput, {nullable:true})
    where?: MealWhereInput;
}
