import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemCreateWithoutFoodInput } from './food-item-create-without-food.input';
import { FoodItemCreateOrConnectWithoutFoodInput } from './food-item-create-or-connect-without-food.input';
import { FoodItemUpsertWithWhereUniqueWithoutFoodInput } from './food-item-upsert-with-where-unique-without-food.input';
import { FoodItemCreateManyFoodInputEnvelope } from './food-item-create-many-food-input-envelope.input';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemUpdateWithWhereUniqueWithoutFoodInput } from './food-item-update-with-where-unique-without-food.input';
import { FoodItemUpdateManyWithWhereWithoutFoodInput } from './food-item-update-many-with-where-without-food.input';
import { FoodItemScalarWhereInput } from './food-item-scalar-where.input';

@InputType()
export class FoodItemUpdateManyWithoutFoodInput {

    @Field(() => [FoodItemCreateWithoutFoodInput], {nullable:true})
    create?: Array<FoodItemCreateWithoutFoodInput>;

    @Field(() => [FoodItemCreateOrConnectWithoutFoodInput], {nullable:true})
    connectOrCreate?: Array<FoodItemCreateOrConnectWithoutFoodInput>;

    @Field(() => [FoodItemUpsertWithWhereUniqueWithoutFoodInput], {nullable:true})
    upsert?: Array<FoodItemUpsertWithWhereUniqueWithoutFoodInput>;

    @Field(() => FoodItemCreateManyFoodInputEnvelope, {nullable:true})
    createMany?: FoodItemCreateManyFoodInputEnvelope;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    set?: Array<FoodItemWhereUniqueInput>;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<FoodItemWhereUniqueInput>;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    delete?: Array<FoodItemWhereUniqueInput>;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    connect?: Array<FoodItemWhereUniqueInput>;

    @Field(() => [FoodItemUpdateWithWhereUniqueWithoutFoodInput], {nullable:true})
    update?: Array<FoodItemUpdateWithWhereUniqueWithoutFoodInput>;

    @Field(() => [FoodItemUpdateManyWithWhereWithoutFoodInput], {nullable:true})
    updateMany?: Array<FoodItemUpdateManyWithWhereWithoutFoodInput>;

    @Field(() => [FoodItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<FoodItemScalarWhereInput>;
}
