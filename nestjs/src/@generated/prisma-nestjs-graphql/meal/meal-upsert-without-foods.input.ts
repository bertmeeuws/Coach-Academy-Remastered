import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealUpdateWithoutFoodsInput } from './meal-update-without-foods.input';
import { MealCreateWithoutFoodsInput } from './meal-create-without-foods.input';

@InputType()
export class MealUpsertWithoutFoodsInput {
  @Field(() => MealUpdateWithoutFoodsInput, { nullable: false })
  update!: MealUpdateWithoutFoodsInput;

  @Field(() => MealCreateWithoutFoodsInput, { nullable: false })
  create!: MealCreateWithoutFoodsInput;
}
