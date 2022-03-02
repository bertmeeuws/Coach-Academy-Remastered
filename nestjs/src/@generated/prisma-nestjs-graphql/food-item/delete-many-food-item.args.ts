import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemWhereInput } from './food-item-where.input';

@ArgsType()
export class DeleteManyFoodItemArgs {

    @Field(() => FoodItemWhereInput, {nullable:true})
    where?: FoodItemWhereInput;
}
