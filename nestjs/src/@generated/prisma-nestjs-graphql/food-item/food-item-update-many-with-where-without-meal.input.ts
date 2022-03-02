import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemScalarWhereInput } from './food-item-scalar-where.input';
import { FoodItemUpdateManyMutationInput } from './food-item-update-many-mutation.input';

@InputType()
export class FoodItemUpdateManyWithWhereWithoutMealInput {

    @Field(() => FoodItemScalarWhereInput, {nullable:false})
    where!: FoodItemScalarWhereInput;

    @Field(() => FoodItemUpdateManyMutationInput, {nullable:false})
    data!: FoodItemUpdateManyMutationInput;
}
