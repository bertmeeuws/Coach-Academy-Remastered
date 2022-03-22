import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealCreateWithoutFoodsInput } from './meal-create-without-foods.input';
import { MealCreateOrConnectWithoutFoodsInput } from './meal-create-or-connect-without-foods.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';

@InputType()
export class MealCreateNestedOneWithoutFoodsInput {
  @Field(() => MealCreateWithoutFoodsInput, { nullable: true })
  create?: MealCreateWithoutFoodsInput;

  @Field(() => MealCreateOrConnectWithoutFoodsInput, { nullable: true })
  connectOrCreate?: MealCreateOrConnectWithoutFoodsInput;

  @Field(() => MealWhereUniqueInput, { nullable: true })
  connect?: MealWhereUniqueInput;
}
