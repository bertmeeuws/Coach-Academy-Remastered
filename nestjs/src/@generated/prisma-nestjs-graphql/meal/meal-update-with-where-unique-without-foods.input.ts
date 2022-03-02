import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealUpdateWithoutFoodsInput } from './meal-update-without-foods.input';

@InputType()
export class MealUpdateWithWhereUniqueWithoutFoodsInput {

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;

    @Field(() => MealUpdateWithoutFoodsInput, {nullable:false})
    data!: MealUpdateWithoutFoodsInput;
}
