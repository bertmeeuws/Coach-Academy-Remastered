import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteUpdateWithoutClientInput } from './invite-update-without-client.input';
import { InviteCreateWithoutClientInput } from './invite-create-without-client.input';

@InputType()
export class InviteUpsertWithoutClientInput {

    @Field(() => InviteUpdateWithoutClientInput, {nullable:false})
    update!: InviteUpdateWithoutClientInput;

    @Field(() => InviteCreateWithoutClientInput, {nullable:false})
    create!: InviteCreateWithoutClientInput;
}
