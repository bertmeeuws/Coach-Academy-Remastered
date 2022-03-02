import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class FoodItemScalarWhereInput {

    @Field(() => [FoodItemScalarWhereInput], {nullable:true})
    AND?: Array<FoodItemScalarWhereInput>;

    @Field(() => [FoodItemScalarWhereInput], {nullable:true})
    OR?: Array<FoodItemScalarWhereInput>;

    @Field(() => [FoodItemScalarWhereInput], {nullable:true})
    NOT?: Array<FoodItemScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mealId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;
}
