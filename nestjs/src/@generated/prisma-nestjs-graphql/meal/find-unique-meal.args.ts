import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealWhereUniqueInput } from './meal-where-unique.input';

@ArgsType()
export class FindUniqueMealArgs {

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;
}
