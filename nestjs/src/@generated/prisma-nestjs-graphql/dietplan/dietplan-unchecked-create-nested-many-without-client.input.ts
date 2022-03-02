import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanCreateWithoutClientInput } from './dietplan-create-without-client.input';
import { DietplanCreateOrConnectWithoutClientInput } from './dietplan-create-or-connect-without-client.input';
import { DietplanCreateManyClientInputEnvelope } from './dietplan-create-many-client-input-envelope.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';

@InputType()
export class DietplanUncheckedCreateNestedManyWithoutClientInput {

    @Field(() => [DietplanCreateWithoutClientInput], {nullable:true})
    create?: Array<DietplanCreateWithoutClientInput>;

    @Field(() => [DietplanCreateOrConnectWithoutClientInput], {nullable:true})
    connectOrCreate?: Array<DietplanCreateOrConnectWithoutClientInput>;

    @Field(() => DietplanCreateManyClientInputEnvelope, {nullable:true})
    createMany?: DietplanCreateManyClientInputEnvelope;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    connect?: Array<DietplanWhereUniqueInput>;
}
