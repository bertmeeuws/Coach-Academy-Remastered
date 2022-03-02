import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemCreateWithoutFoodInput } from './food-item-create-without-food.input';
import { FoodItemCreateOrConnectWithoutFoodInput } from './food-item-create-or-connect-without-food.input';
import { FoodItemCreateManyFoodInputEnvelope } from './food-item-create-many-food-input-envelope.input';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';

@InputType()
export class FoodItemUncheckedCreateNestedManyWithoutFoodInput {

    @Field(() => [FoodItemCreateWithoutFoodInput], {nullable:true})
    create?: Array<FoodItemCreateWithoutFoodInput>;

    @Field(() => [FoodItemCreateOrConnectWithoutFoodInput], {nullable:true})
    connectOrCreate?: Array<FoodItemCreateOrConnectWithoutFoodInput>;

    @Field(() => FoodItemCreateManyFoodInputEnvelope, {nullable:true})
    createMany?: FoodItemCreateManyFoodInputEnvelope;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    connect?: Array<FoodItemWhereUniqueInput>;
}
