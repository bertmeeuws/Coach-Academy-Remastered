import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';

@InputType()
export class FoodRelationFilter {

    @Field(() => FoodWhereInput, {nullable:true})
    is?: FoodWhereInput;

    @Field(() => FoodWhereInput, {nullable:true})
    isNot?: FoodWhereInput;
}
