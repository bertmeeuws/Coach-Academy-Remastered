import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodItemCreateManyInput } from './food-item-create-many.input';

@ArgsType()
export class CreateManyFoodItemArgs {

    @Field(() => [FoodItemCreateManyInput], {nullable:false})
    data!: Array<FoodItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
