import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUpdateWithoutUserInput } from './client-update-without-user.input';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';

@InputType()
export class ClientUpsertWithoutUserInput {

    @Field(() => ClientUpdateWithoutUserInput, {nullable:false})
    update!: ClientUpdateWithoutUserInput;

    @Field(() => ClientCreateWithoutUserInput, {nullable:false})
    create!: ClientCreateWithoutUserInput;
}
