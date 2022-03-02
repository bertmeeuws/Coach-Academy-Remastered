import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemUpdateManyMutationInput } from './food-item-update-many-mutation.input';
import { FoodItemWhereInput } from './food-item-where.input';

@ArgsType()
export class UpdateManyFoodItemArgs {

    @Field(() => FoodItemUpdateManyMutationInput, {nullable:false})
    data!: FoodItemUpdateManyMutationInput;

    @Field(() => FoodItemWhereInput, {nullable:true})
    where?: FoodItemWhereInput;
}
