import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FoodItemListRelationFilter } from '../food-item/food-item-list-relation-filter.input';

@InputType()
export class FoodWhereInput {

    @Field(() => [FoodWhereInput], {nullable:true})
    AND?: Array<FoodWhereInput>;

    @Field(() => [FoodWhereInput], {nullable:true})
    OR?: Array<FoodWhereInput>;

    @Field(() => [FoodWhereInput], {nullable:true})
    NOT?: Array<FoodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    carbs?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    protein?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    fat?: IntFilter;

    @Field(() => FoodItemListRelationFilter, {nullable:true})
    FoodItem?: FoodItemListRelationFilter;
}
