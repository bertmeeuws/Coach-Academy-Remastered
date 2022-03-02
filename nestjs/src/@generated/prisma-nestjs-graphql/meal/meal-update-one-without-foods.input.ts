import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealCreateWithoutFoodsInput } from './meal-create-without-foods.input';
import { MealCreateOrConnectWithoutFoodsInput } from './meal-create-or-connect-without-foods.input';
import { MealUpsertWithoutFoodsInput } from './meal-upsert-without-foods.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealUpdateWithoutFoodsInput } from './meal-update-without-foods.input';

@InputType()
export class MealUpdateOneWithoutFoodsInput {

    @Field(() => MealCreateWithoutFoodsInput, {nullable:true})
    create?: MealCreateWithoutFoodsInput;

    @Field(() => MealCreateOrConnectWithoutFoodsInput, {nullable:true})
    connectOrCreate?: MealCreateOrConnectWithoutFoodsInput;

    @Field(() => MealUpsertWithoutFoodsInput, {nullable:true})
    upsert?: MealUpsertWithoutFoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MealWhereUniqueInput, {nullable:true})
    connect?: MealWhereUniqueInput;

    @Field(() => MealUpdateWithoutFoodsInput, {nullable:true})
    update?: MealUpdateWithoutFoodsInput;
}
