import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemCreateManyFoodInput } from './food-item-create-many-food.input';

@InputType()
export class FoodItemCreateManyFoodInputEnvelope {

    @Field(() => [FoodItemCreateManyFoodInput], {nullable:false})
    data!: Array<FoodItemCreateManyFoodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
