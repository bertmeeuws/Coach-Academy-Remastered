import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutInviteInput } from './client-create-without-invite.input';
import { ClientCreateOrConnectWithoutInviteInput } from './client-create-or-connect-without-invite.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientUncheckedCreateNestedOneWithoutInviteInput {

    @Field(() => ClientCreateWithoutInviteInput, {nullable:true})
    create?: ClientCreateWithoutInviteInput;

    @Field(() => ClientCreateOrConnectWithoutInviteInput, {nullable:true})
    connectOrCreate?: ClientCreateOrConnectWithoutInviteInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    connect?: ClientWhereUniqueInput;
}
