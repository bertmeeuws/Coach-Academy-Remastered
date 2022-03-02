import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealUpdateWithoutDietplanInput } from './meal-update-without-dietplan.input';

@InputType()
export class MealUpdateWithWhereUniqueWithoutDietplanInput {

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;

    @Field(() => MealUpdateWithoutDietplanInput, {nullable:false})
    data!: MealUpdateWithoutDietplanInput;
}
