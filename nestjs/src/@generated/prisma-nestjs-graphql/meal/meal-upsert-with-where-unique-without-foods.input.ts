import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealUpdateWithoutFoodsInput } from './meal-update-without-foods.input';
import { MealCreateWithoutFoodsInput } from './meal-create-without-foods.input';

@InputType()
export class MealUpsertWithWhereUniqueWithoutFoodsInput {

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;

    @Field(() => MealUpdateWithoutFoodsInput, {nullable:false})
    update!: MealUpdateWithoutFoodsInput;

    @Field(() => MealCreateWithoutFoodsInput, {nullable:false})
    create!: MealCreateWithoutFoodsInput;
}
