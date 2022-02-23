import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';
import { ClientCreateOrConnectWithoutUserInput } from './client-create-or-connect-without-user.input';
import { ClientUpsertWithWhereUniqueWithoutUserInput } from './client-upsert-with-where-unique-without-user.input';
import { ClientCreateManyUserInputEnvelope } from './client-create-many-user-input-envelope.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithWhereUniqueWithoutUserInput } from './client-update-with-where-unique-without-user.input';
import { ClientUpdateManyWithWhereWithoutUserInput } from './client-update-many-with-where-without-user.input';
import { ClientScalarWhereInput } from './client-scalar-where.input';

@InputType()
export class ClientUpdateManyWithoutUserInput {

    @Field(() => [ClientCreateWithoutUserInput], {nullable:true})
    create?: Array<ClientCreateWithoutUserInput>;

    @Field(() => [ClientCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ClientCreateOrConnectWithoutUserInput>;

    @Field(() => [ClientUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ClientUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ClientCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ClientCreateManyUserInputEnvelope;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    set?: Array<ClientWhereUniqueInput>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    disconnect?: Array<ClientWhereUniqueInput>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    delete?: Array<ClientWhereUniqueInput>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    connect?: Array<ClientWhereUniqueInput>;

    @Field(() => [ClientUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ClientUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ClientUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ClientUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    deleteMany?: Array<ClientScalarWhereInput>;
}
