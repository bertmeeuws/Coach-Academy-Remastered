import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanCreateWithoutCoachInput } from './dietplan-create-without-coach.input';
import { DietplanCreateOrConnectWithoutCoachInput } from './dietplan-create-or-connect-without-coach.input';
import { DietplanUpsertWithWhereUniqueWithoutCoachInput } from './dietplan-upsert-with-where-unique-without-coach.input';
import { DietplanCreateManyCoachInputEnvelope } from './dietplan-create-many-coach-input-envelope.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanUpdateWithWhereUniqueWithoutCoachInput } from './dietplan-update-with-where-unique-without-coach.input';
import { DietplanUpdateManyWithWhereWithoutCoachInput } from './dietplan-update-many-with-where-without-coach.input';
import { DietplanScalarWhereInput } from './dietplan-scalar-where.input';

@InputType()
export class DietplanUpdateManyWithoutCoachInput {

    @Field(() => [DietplanCreateWithoutCoachInput], {nullable:true})
    create?: Array<DietplanCreateWithoutCoachInput>;

    @Field(() => [DietplanCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<DietplanCreateOrConnectWithoutCoachInput>;

    @Field(() => [DietplanUpsertWithWhereUniqueWithoutCoachInput], {nullable:true})
    upsert?: Array<DietplanUpsertWithWhereUniqueWithoutCoachInput>;

    @Field(() => DietplanCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: DietplanCreateManyCoachInputEnvelope;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    set?: Array<DietplanWhereUniqueInput>;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    disconnect?: Array<DietplanWhereUniqueInput>;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    delete?: Array<DietplanWhereUniqueInput>;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    connect?: Array<DietplanWhereUniqueInput>;

    @Field(() => [DietplanUpdateWithWhereUniqueWithoutCoachInput], {nullable:true})
    update?: Array<DietplanUpdateWithWhereUniqueWithoutCoachInput>;

    @Field(() => [DietplanUpdateManyWithWhereWithoutCoachInput], {nullable:true})
    updateMany?: Array<DietplanUpdateManyWithWhereWithoutCoachInput>;

    @Field(() => [DietplanScalarWhereInput], {nullable:true})
    deleteMany?: Array<DietplanScalarWhereInput>;
}
