import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FoodAvgAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    carbs?: number;

    @Field(() => Float, {nullable:true})
    protein?: number;

    @Field(() => Float, {nullable:true})
    fat?: number;
}
