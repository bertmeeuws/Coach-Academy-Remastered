import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanCreateWithoutCoachInput } from './meal-plan-create-without-coach.input';
import { MealPlanCreateOrConnectWithoutCoachInput } from './meal-plan-create-or-connect-without-coach.input';
import { MealPlanCreateManyCoachInputEnvelope } from './meal-plan-create-many-coach-input-envelope.input';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';

@InputType()
export class MealPlanUncheckedCreateNestedManyWithoutCoachInput {

    @Field(() => [MealPlanCreateWithoutCoachInput], {nullable:true})
    create?: Array<MealPlanCreateWithoutCoachInput>;

    @Field(() => [MealPlanCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<MealPlanCreateOrConnectWithoutCoachInput>;

    @Field(() => MealPlanCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: MealPlanCreateManyCoachInputEnvelope;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    connect?: Array<MealPlanWhereUniqueInput>;
}
