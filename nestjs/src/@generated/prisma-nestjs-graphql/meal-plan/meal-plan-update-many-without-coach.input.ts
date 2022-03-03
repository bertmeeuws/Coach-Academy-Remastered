import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanCreateWithoutCoachInput } from './meal-plan-create-without-coach.input';
import { MealPlanCreateOrConnectWithoutCoachInput } from './meal-plan-create-or-connect-without-coach.input';
import { MealPlanUpsertWithWhereUniqueWithoutCoachInput } from './meal-plan-upsert-with-where-unique-without-coach.input';
import { MealPlanCreateManyCoachInputEnvelope } from './meal-plan-create-many-coach-input-envelope.input';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateWithWhereUniqueWithoutCoachInput } from './meal-plan-update-with-where-unique-without-coach.input';
import { MealPlanUpdateManyWithWhereWithoutCoachInput } from './meal-plan-update-many-with-where-without-coach.input';
import { MealPlanScalarWhereInput } from './meal-plan-scalar-where.input';

@InputType()
export class MealPlanUpdateManyWithoutCoachInput {

    @Field(() => [MealPlanCreateWithoutCoachInput], {nullable:true})
    create?: Array<MealPlanCreateWithoutCoachInput>;

    @Field(() => [MealPlanCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<MealPlanCreateOrConnectWithoutCoachInput>;

    @Field(() => [MealPlanUpsertWithWhereUniqueWithoutCoachInput], {nullable:true})
    upsert?: Array<MealPlanUpsertWithWhereUniqueWithoutCoachInput>;

    @Field(() => MealPlanCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: MealPlanCreateManyCoachInputEnvelope;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    set?: Array<MealPlanWhereUniqueInput>;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    disconnect?: Array<MealPlanWhereUniqueInput>;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    delete?: Array<MealPlanWhereUniqueInput>;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    connect?: Array<MealPlanWhereUniqueInput>;

    @Field(() => [MealPlanUpdateWithWhereUniqueWithoutCoachInput], {nullable:true})
    update?: Array<MealPlanUpdateWithWhereUniqueWithoutCoachInput>;

    @Field(() => [MealPlanUpdateManyWithWhereWithoutCoachInput], {nullable:true})
    updateMany?: Array<MealPlanUpdateManyWithWhereWithoutCoachInput>;

    @Field(() => [MealPlanScalarWhereInput], {nullable:true})
    deleteMany?: Array<MealPlanScalarWhereInput>;
}
