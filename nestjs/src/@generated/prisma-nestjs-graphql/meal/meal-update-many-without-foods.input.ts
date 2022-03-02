import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealCreateWithoutFoodsInput } from './meal-create-without-foods.input';
import { MealCreateOrConnectWithoutFoodsInput } from './meal-create-or-connect-without-foods.input';
import { MealUpsertWithWhereUniqueWithoutFoodsInput } from './meal-upsert-with-where-unique-without-foods.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealUpdateWithWhereUniqueWithoutFoodsInput } from './meal-update-with-where-unique-without-foods.input';
import { MealUpdateManyWithWhereWithoutFoodsInput } from './meal-update-many-with-where-without-foods.input';
import { MealScalarWhereInput } from './meal-scalar-where.input';

@InputType()
export class MealUpdateManyWithoutFoodsInput {

    @Field(() => [MealCreateWithoutFoodsInput], {nullable:true})
    create?: Array<MealCreateWithoutFoodsInput>;

    @Field(() => [MealCreateOrConnectWithoutFoodsInput], {nullable:true})
    connectOrCreate?: Array<MealCreateOrConnectWithoutFoodsInput>;

    @Field(() => [MealUpsertWithWhereUniqueWithoutFoodsInput], {nullable:true})
    upsert?: Array<MealUpsertWithWhereUniqueWithoutFoodsInput>;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    set?: Array<MealWhereUniqueInput>;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    disconnect?: Array<MealWhereUniqueInput>;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    delete?: Array<MealWhereUniqueInput>;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    connect?: Array<MealWhereUniqueInput>;

    @Field(() => [MealUpdateWithWhereUniqueWithoutFoodsInput], {nullable:true})
    update?: Array<MealUpdateWithWhereUniqueWithoutFoodsInput>;

    @Field(() => [MealUpdateManyWithWhereWithoutFoodsInput], {nullable:true})
    updateMany?: Array<MealUpdateManyWithWhereWithoutFoodsInput>;

    @Field(() => [MealScalarWhereInput], {nullable:true})
    deleteMany?: Array<MealScalarWhereInput>;
}
