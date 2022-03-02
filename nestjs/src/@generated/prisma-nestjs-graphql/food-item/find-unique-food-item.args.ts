import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';

@ArgsType()
export class FindUniqueFoodItemArgs {

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;
}
