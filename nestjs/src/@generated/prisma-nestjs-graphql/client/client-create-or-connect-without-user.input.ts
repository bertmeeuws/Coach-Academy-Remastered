import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';

@InputType()
export class ClientCreateOrConnectWithoutUserInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateWithoutUserInput, {nullable:false})
    create!: ClientCreateWithoutUserInput;
}
