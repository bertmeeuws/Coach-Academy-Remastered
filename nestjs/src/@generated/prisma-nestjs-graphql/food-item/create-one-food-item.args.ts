import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemCreateInput } from './food-item-create.input';

@ArgsType()
export class CreateOneFoodItemArgs {

    @Field(() => FoodItemCreateInput, {nullable:false})
    data!: FoodItemCreateInput;
}
