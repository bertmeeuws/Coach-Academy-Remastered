import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealUpdateInput } from './meal-update.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';

@ArgsType()
export class UpdateOneMealArgs {

    @Field(() => MealUpdateInput, {nullable:false})
    data!: MealUpdateInput;

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;
}
