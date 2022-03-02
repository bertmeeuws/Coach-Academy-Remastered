import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodItemMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    mealId?: true;

    @Field(() => Boolean, {nullable:true})
    notes?: true;

    @Field(() => Boolean, {nullable:true})
    foodId?: true;
}
