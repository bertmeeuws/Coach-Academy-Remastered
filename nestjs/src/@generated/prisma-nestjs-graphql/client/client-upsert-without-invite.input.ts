import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUpdateWithoutInviteInput } from './client-update-without-invite.input';
import { ClientCreateWithoutInviteInput } from './client-create-without-invite.input';

@InputType()
export class ClientUpsertWithoutInviteInput {

    @Field(() => ClientUpdateWithoutInviteInput, {nullable:false})
    update!: ClientUpdateWithoutInviteInput;

    @Field(() => ClientCreateWithoutInviteInput, {nullable:false})
    create!: ClientCreateWithoutInviteInput;
}
