import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';
import { ClientCreateOrConnectWithoutUserInput } from './client-create-or-connect-without-user.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => ClientCreateWithoutUserInput, {nullable:true})
    create?: ClientCreateWithoutUserInput;

    @Field(() => ClientCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    connect?: ClientWhereUniqueInput;
}
