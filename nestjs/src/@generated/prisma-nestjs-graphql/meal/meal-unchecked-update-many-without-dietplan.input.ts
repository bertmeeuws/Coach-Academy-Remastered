import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealCreateWithoutDietplanInput } from './meal-create-without-dietplan.input';
import { MealCreateOrConnectWithoutDietplanInput } from './meal-create-or-connect-without-dietplan.input';
import { MealUpsertWithWhereUniqueWithoutDietplanInput } from './meal-upsert-with-where-unique-without-dietplan.input';
import { MealCreateManyDietplanInputEnvelope } from './meal-create-many-dietplan-input-envelope.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealUpdateWithWhereUniqueWithoutDietplanInput } from './meal-update-with-where-unique-without-dietplan.input';
import { MealUpdateManyWithWhereWithoutDietplanInput } from './meal-update-many-with-where-without-dietplan.input';
import { MealScalarWhereInput } from './meal-scalar-where.input';

@InputType()
export class MealUncheckedUpdateManyWithoutDietplanInput {

    @Field(() => [MealCreateWithoutDietplanInput], {nullable:true})
    create?: Array<MealCreateWithoutDietplanInput>;

    @Field(() => [MealCreateOrConnectWithoutDietplanInput], {nullable:true})
    connectOrCreate?: Array<MealCreateOrConnectWithoutDietplanInput>;

    @Field(() => [MealUpsertWithWhereUniqueWithoutDietplanInput], {nullable:true})
    upsert?: Array<MealUpsertWithWhereUniqueWithoutDietplanInput>;

    @Field(() => MealCreateManyDietplanInputEnvelope, {nullable:true})
    createMany?: MealCreateManyDietplanInputEnvelope;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    set?: Array<MealWhereUniqueInput>;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    disconnect?: Array<MealWhereUniqueInput>;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    delete?: Array<MealWhereUniqueInput>;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    connect?: Array<MealWhereUniqueInput>;

    @Field(() => [MealUpdateWithWhereUniqueWithoutDietplanInput], {nullable:true})
    update?: Array<MealUpdateWithWhereUniqueWithoutDietplanInput>;

    @Field(() => [MealUpdateManyWithWhereWithoutDietplanInput], {nullable:true})
    updateMany?: Array<MealUpdateManyWithWhereWithoutDietplanInput>;

    @Field(() => [MealScalarWhereInput], {nullable:true})
    deleteMany?: Array<MealScalarWhereInput>;
}
