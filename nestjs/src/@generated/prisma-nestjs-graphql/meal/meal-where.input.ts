import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DietplanRelationFilter } from '../dietplan/dietplan-relation-filter.input';
import { EnumMEAL_DAYFilter } from '../prisma/enum-meal-day-filter.input';
import { FoodItemListRelationFilter } from '../food-item/food-item-list-relation-filter.input';

@InputType()
export class MealWhereInput {

    @Field(() => [MealWhereInput], {nullable:true})
    AND?: Array<MealWhereInput>;

    @Field(() => [MealWhereInput], {nullable:true})
    OR?: Array<MealWhereInput>;

    @Field(() => [MealWhereInput], {nullable:true})
    NOT?: Array<MealWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DietplanRelationFilter, {nullable:true})
    dietplan?: DietplanRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    dietplanId?: StringFilter;

    @Field(() => EnumMEAL_DAYFilter, {nullable:true})
    day?: EnumMEAL_DAYFilter;

    @Field(() => FoodItemListRelationFilter, {nullable:true})
    foods?: FoodItemListRelationFilter;
}
