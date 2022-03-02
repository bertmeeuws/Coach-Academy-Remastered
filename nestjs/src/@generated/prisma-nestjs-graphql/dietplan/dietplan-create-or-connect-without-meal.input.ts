import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanCreateWithoutMealInput } from './dietplan-create-without-meal.input';

@InputType()
export class DietplanCreateOrConnectWithoutMealInput {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;

    @Field(() => DietplanCreateWithoutMealInput, {nullable:false})
    create!: DietplanCreateWithoutMealInput;
}
