import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientCreateWithoutInviteInput } from './client-create-without-invite.input';

@InputType()
export class ClientCreateOrConnectWithoutInviteInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateWithoutInviteInput, {nullable:false})
    create!: ClientCreateWithoutInviteInput;
}
