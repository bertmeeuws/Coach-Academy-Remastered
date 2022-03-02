import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemWhereInput } from './food-item-where.input';
import { FoodItemOrderByWithRelationInput } from './food-item-order-by-with-relation.input';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodItemScalarFieldEnum } from './food-item-scalar-field.enum';

@ArgsType()
export class FindFirstFoodItemArgs {

    @Field(() => FoodItemWhereInput, {nullable:true})
    where?: FoodItemWhereInput;

    @Field(() => [FoodItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodItemOrderByWithRelationInput>;

    @Field(() => FoodItemWhereUniqueInput, {nullable:true})
    cursor?: FoodItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FoodItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FoodItemScalarFieldEnum>;
}
