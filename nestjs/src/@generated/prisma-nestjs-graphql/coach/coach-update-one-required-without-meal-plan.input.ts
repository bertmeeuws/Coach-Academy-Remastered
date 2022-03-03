import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutMealPlanInput } from './coach-create-without-meal-plan.input';
import { CoachCreateOrConnectWithoutMealPlanInput } from './coach-create-or-connect-without-meal-plan.input';
import { CoachUpsertWithoutMealPlanInput } from './coach-upsert-without-meal-plan.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateWithoutMealPlanInput } from './coach-update-without-meal-plan.input';

@InputType()
export class CoachUpdateOneRequiredWithoutMealPlanInput {

    @Field(() => CoachCreateWithoutMealPlanInput, {nullable:true})
    create?: CoachCreateWithoutMealPlanInput;

    @Field(() => CoachCreateOrConnectWithoutMealPlanInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutMealPlanInput;

    @Field(() => CoachUpsertWithoutMealPlanInput, {nullable:true})
    upsert?: CoachUpsertWithoutMealPlanInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;

    @Field(() => CoachUpdateWithoutMealPlanInput, {nullable:true})
    update?: CoachUpdateWithoutMealPlanInput;
}
