import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanCreateWithoutMealInput } from './dietplan-create-without-meal.input';
import { DietplanCreateOrConnectWithoutMealInput } from './dietplan-create-or-connect-without-meal.input';
import { DietplanUpsertWithoutMealInput } from './dietplan-upsert-without-meal.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanUpdateWithoutMealInput } from './dietplan-update-without-meal.input';

@InputType()
export class DietplanUpdateOneRequiredWithoutMealInput {

    @Field(() => DietplanCreateWithoutMealInput, {nullable:true})
    create?: DietplanCreateWithoutMealInput;

    @Field(() => DietplanCreateOrConnectWithoutMealInput, {nullable:true})
    connectOrCreate?: DietplanCreateOrConnectWithoutMealInput;

    @Field(() => DietplanUpsertWithoutMealInput, {nullable:true})
    upsert?: DietplanUpsertWithoutMealInput;

    @Field(() => DietplanWhereUniqueInput, {nullable:true})
    connect?: DietplanWhereUniqueInput;

    @Field(() => DietplanUpdateWithoutMealInput, {nullable:true})
    update?: DietplanUpdateWithoutMealInput;
}
