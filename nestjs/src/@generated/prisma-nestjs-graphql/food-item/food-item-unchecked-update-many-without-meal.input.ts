import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodItemCreateWithoutMealInput } from './food-item-create-without-meal.input';
import { FoodItemCreateOrConnectWithoutMealInput } from './food-item-create-or-connect-without-meal.input';
import { FoodItemUpsertWithWhereUniqueWithoutMealInput } from './food-item-upsert-with-where-unique-without-meal.input';
import { FoodItemCreateManyMealInputEnvelope } from './food-item-create-many-meal-input-envelope.input';
import { FoodItemWhereUniqueInput } from './food-item-where-unique.input';
import { FoodItemUpdateWithWhereUniqueWithoutMealInput } from './food-item-update-with-where-unique-without-meal.input';
import { FoodItemUpdateManyWithWhereWithoutMealInput } from './food-item-update-many-with-where-without-meal.input';
import { FoodItemScalarWhereInput } from './food-item-scalar-where.input';

@InputType()
export class FoodItemUncheckedUpdateManyWithoutMealInput {

    @Field(() => [FoodItemCreateWithoutMealInput], {nullable:true})
    create?: Array<FoodItemCreateWithoutMealInput>;

    @Field(() => [FoodItemCreateOrConnectWithoutMealInput], {nullable:true})
    connectOrCreate?: Array<FoodItemCreateOrConnectWithoutMealInput>;

    @Field(() => [FoodItemUpsertWithWhereUniqueWithoutMealInput], {nullable:true})
    upsert?: Array<FoodItemUpsertWithWhereUniqueWithoutMealInput>;

    @Field(() => FoodItemCreateManyMealInputEnvelope, {nullable:true})
    createMany?: FoodItemCreateManyMealInputEnvelope;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    set?: Array<FoodItemWhereUniqueInput>;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<FoodItemWhereUniqueInput>;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    delete?: Array<FoodItemWhereUniqueInput>;

    @Field(() => [FoodItemWhereUniqueInput], {nullable:true})
    connect?: Array<FoodItemWhereUniqueInput>;

    @Field(() => [FoodItemUpdateWithWhereUniqueWithoutMealInput], {nullable:true})
    update?: Array<FoodItemUpdateWithWhereUniqueWithoutMealInput>;

    @Field(() => [FoodItemUpdateManyWithWhereWithoutMealInput], {nullable:true})
    updateMany?: Array<FoodItemUpdateManyWithWhereWithoutMealInput>;

    @Field(() => [FoodItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<FoodItemScalarWhereInput>;
}
