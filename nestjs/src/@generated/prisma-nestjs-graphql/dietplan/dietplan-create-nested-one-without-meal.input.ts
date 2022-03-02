import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanCreateWithoutMealInput } from './dietplan-create-without-meal.input';
import { DietplanCreateOrConnectWithoutMealInput } from './dietplan-create-or-connect-without-meal.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';

@InputType()
export class DietplanCreateNestedOneWithoutMealInput {

    @Field(() => DietplanCreateWithoutMealInput, {nullable:true})
    create?: DietplanCreateWithoutMealInput;

    @Field(() => DietplanCreateOrConnectWithoutMealInput, {nullable:true})
    connectOrCreate?: DietplanCreateOrConnectWithoutMealInput;

    @Field(() => DietplanWhereUniqueInput, {nullable:true})
    connect?: DietplanWhereUniqueInput;
}
