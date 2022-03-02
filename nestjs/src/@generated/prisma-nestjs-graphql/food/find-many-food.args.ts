import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { FoodOrderByWithRelationInput } from './food-order-by-with-relation.input';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodScalarFieldEnum } from './food-scalar-field.enum';

@ArgsType()
export class FindManyFoodArgs {

    @Field(() => FoodWhereInput, {nullable:true})
    where?: FoodWhereInput;

    @Field(() => [FoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodOrderByWithRelationInput>;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    cursor?: FoodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FoodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FoodScalarFieldEnum>;
}
