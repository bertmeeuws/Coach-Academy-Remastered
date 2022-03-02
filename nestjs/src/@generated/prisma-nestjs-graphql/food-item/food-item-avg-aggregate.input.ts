import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodItemAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    carbs?: true;

    @Field(() => Boolean, {nullable:true})
    protein?: true;

    @Field(() => Boolean, {nullable:true})
    fat?: true;
}
