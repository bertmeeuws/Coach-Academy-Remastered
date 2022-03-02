import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealCreateWithoutFoodsInput } from './meal-create-without-foods.input';

@InputType()
export class MealCreateOrConnectWithoutFoodsInput {

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;

    @Field(() => MealCreateWithoutFoodsInput, {nullable:false})
    create!: MealCreateWithoutFoodsInput;
}
