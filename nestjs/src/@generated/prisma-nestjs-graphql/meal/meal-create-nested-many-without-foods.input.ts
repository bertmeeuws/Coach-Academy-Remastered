import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealCreateWithoutFoodsInput } from './meal-create-without-foods.input';
import { MealCreateOrConnectWithoutFoodsInput } from './meal-create-or-connect-without-foods.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';

@InputType()
export class MealCreateNestedManyWithoutFoodsInput {

    @Field(() => [MealCreateWithoutFoodsInput], {nullable:true})
    create?: Array<MealCreateWithoutFoodsInput>;

    @Field(() => [MealCreateOrConnectWithoutFoodsInput], {nullable:true})
    connectOrCreate?: Array<MealCreateOrConnectWithoutFoodsInput>;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    connect?: Array<MealWhereUniqueInput>;
}
