import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanCreateWithoutClientInput } from './dietplan-create-without-client.input';
import { DietplanCreateOrConnectWithoutClientInput } from './dietplan-create-or-connect-without-client.input';
import { DietplanUpsertWithWhereUniqueWithoutClientInput } from './dietplan-upsert-with-where-unique-without-client.input';
import { DietplanCreateManyClientInputEnvelope } from './dietplan-create-many-client-input-envelope.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanUpdateWithWhereUniqueWithoutClientInput } from './dietplan-update-with-where-unique-without-client.input';
import { DietplanUpdateManyWithWhereWithoutClientInput } from './dietplan-update-many-with-where-without-client.input';
import { DietplanScalarWhereInput } from './dietplan-scalar-where.input';

@InputType()
export class DietplanUpdateManyWithoutClientInput {

    @Field(() => [DietplanCreateWithoutClientInput], {nullable:true})
    create?: Array<DietplanCreateWithoutClientInput>;

    @Field(() => [DietplanCreateOrConnectWithoutClientInput], {nullable:true})
    connectOrCreate?: Array<DietplanCreateOrConnectWithoutClientInput>;

    @Field(() => [DietplanUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    upsert?: Array<DietplanUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => DietplanCreateManyClientInputEnvelope, {nullable:true})
    createMany?: DietplanCreateManyClientInputEnvelope;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    set?: Array<DietplanWhereUniqueInput>;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    disconnect?: Array<DietplanWhereUniqueInput>;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    delete?: Array<DietplanWhereUniqueInput>;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    connect?: Array<DietplanWhereUniqueInput>;

    @Field(() => [DietplanUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    update?: Array<DietplanUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [DietplanUpdateManyWithWhereWithoutClientInput], {nullable:true})
    updateMany?: Array<DietplanUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [DietplanScalarWhereInput], {nullable:true})
    deleteMany?: Array<DietplanScalarWhereInput>;
}
