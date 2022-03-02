import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemCreateInput } from './food-item-create.input';
import { FoodItemUpdateInput } from './food-item-update.input';

@ArgsType()
export class UpsertOneFoodItemArgs {

    @Field(() => FoodItemWhereUniqueInput, {nullable:false})
    where!: FoodItemWhereUniqueInput;

    @Field(() => FoodItemCreateInput, {nullable:false})
    create!: FoodItemCreateInput;

    @Field(() => FoodItemUpdateInput, {nullable:false})
    update!: FoodItemUpdateInput;
}
