import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutInviteInput } from './client-create-without-invite.input';
import { ClientCreateOrConnectWithoutInviteInput } from './client-create-or-connect-without-invite.input';
import { ClientUpsertWithoutInviteInput } from './client-upsert-without-invite.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutInviteInput } from './client-update-without-invite.input';

@InputType()
export class ClientUncheckedUpdateOneWithoutInviteInput {

    @Field(() => ClientCreateWithoutInviteInput, {nullable:true})
    create?: ClientCreateWithoutInviteInput;

    @Field(() => ClientCreateOrConnectWithoutInviteInput, {nullable:true})
    connectOrCreate?: ClientCreateOrConnectWithoutInviteInput;

    @Field(() => ClientUpsertWithoutInviteInput, {nullable:true})
    upsert?: ClientUpsertWithoutInviteInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    connect?: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutInviteInput, {nullable:true})
    update?: ClientUpdateWithoutInviteInput;
}
