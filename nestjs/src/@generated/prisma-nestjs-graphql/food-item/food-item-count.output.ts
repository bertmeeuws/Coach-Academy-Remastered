import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodItemCount {

    @Field(() => Int, {nullable:false})
    Meal?: number;
}
