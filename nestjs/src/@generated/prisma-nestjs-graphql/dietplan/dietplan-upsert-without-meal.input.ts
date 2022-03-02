import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanUpdateWithoutMealInput } from './dietplan-update-without-meal.input';
import { DietplanCreateWithoutMealInput } from './dietplan-create-without-meal.input';

@InputType()
export class DietplanUpsertWithoutMealInput {

    @Field(() => DietplanUpdateWithoutMealInput, {nullable:false})
    update!: DietplanUpdateWithoutMealInput;

    @Field(() => DietplanCreateWithoutMealInput, {nullable:false})
    create!: DietplanCreateWithoutMealInput;
}
