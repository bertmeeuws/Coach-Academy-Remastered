import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemUpdateInput } from './food-item-update.input';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';

@ArgsType()
export class UpdateOneFoodItemArgs {

    @Field(() => FoodItemUpdateInput, {nullable:false})
    data!: FoodItemUpdateInput;

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;
}
