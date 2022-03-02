import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealCreateNestedManyWithoutFoodsInput } from '../meal/meal-create-nested-many-without-foods.input';
import { FoodCreateNestedOneWithoutFoodItemInput } from '../food/food-create-nested-one-without-food-item.input';

@InputType()
export class FoodItemCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:true})
    mealId?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => MealCreateNestedManyWithoutFoodsInput, {nullable:true})
    Meal?: MealCreateNestedManyWithoutFoodsInput;

    @Field(() => FoodCreateNestedOneWithoutFoodItemInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutFoodItemInput;
}
