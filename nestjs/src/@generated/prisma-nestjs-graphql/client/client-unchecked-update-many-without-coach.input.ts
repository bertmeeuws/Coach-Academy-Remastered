import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutCoachInput } from './client-create-without-coach.input';
import { ClientCreateOrConnectWithoutCoachInput } from './client-create-or-connect-without-coach.input';
import { ClientUpsertWithWhereUniqueWithoutCoachInput } from './client-upsert-with-where-unique-without-coach.input';
import { ClientCreateManyCoachInputEnvelope } from './client-create-many-coach-input-envelope.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithWhereUniqueWithoutCoachInput } from './client-update-with-where-unique-without-coach.input';
import { ClientUpdateManyWithWhereWithoutCoachInput } from './client-update-many-with-where-without-coach.input';
import { ClientScalarWhereInput } from './client-scalar-where.input';

@InputType()
export class ClientUncheckedUpdateManyWithoutCoachInput {

    @Field(() => [ClientCreateWithoutCoachInput], {nullable:true})
    create?: Array<ClientCreateWithoutCoachInput>;

    @Field(() => [ClientCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<ClientCreateOrConnectWithoutCoachInput>;

    @Field(() => [ClientUpsertWithWhereUniqueWithoutCoachInput], {nullable:true})
    upsert?: Array<ClientUpsertWithWhereUniqueWithoutCoachInput>;

    @Field(() => ClientCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: ClientCreateManyCoachInputEnvelope;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    set?: Array<ClientWhereUniqueInput>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    disconnect?: Array<ClientWhereUniqueInput>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    delete?: Array<ClientWhereUniqueInput>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    connect?: Array<ClientWhereUniqueInput>;

    @Field(() => [ClientUpdateWithWhereUniqueWithoutCoachInput], {nullable:true})
    update?: Array<ClientUpdateWithWhereUniqueWithoutCoachInput>;

    @Field(() => [ClientUpdateManyWithWhereWithoutCoachInput], {nullable:true})
    updateMany?: Array<ClientUpdateManyWithWhereWithoutCoachInput>;

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    deleteMany?: Array<ClientScalarWhereInput>;
}
