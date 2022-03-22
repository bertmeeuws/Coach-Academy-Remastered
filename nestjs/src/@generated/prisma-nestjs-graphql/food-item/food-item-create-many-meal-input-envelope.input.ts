import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemCreateManyMealInput } from './food-item-create-many-meal.input';

@InputType()
export class FoodItemCreateManyMealInputEnvelope {
  @Field(() => [FoodItemCreateManyMealInput], { nullable: false })
  data!: Array<FoodItemCreateManyMealInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
