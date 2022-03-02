import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MealListRelationFilter } from '../meal/meal-list-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';

@InputType()
export class FoodItemWhereInput {

    @Field(() => [FoodItemWhereInput], {nullable:true})
    AND?: Array<FoodItemWhereInput>;

    @Field(() => [FoodItemWhereInput], {nullable:true})
    OR?: Array<FoodItemWhereInput>;

    @Field(() => [FoodItemWhereInput], {nullable:true})
    NOT?: Array<FoodItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;

    @Field(() => MealListRelationFilter, {nullable:true})
    Meal?: MealListRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mealId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;
}
