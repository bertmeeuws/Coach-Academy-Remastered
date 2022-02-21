import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';
import { ClientCreateOrConnectWithoutUserInput } from './client-create-or-connect-without-user.input';
import { ClientUpsertWithoutUserInput } from './client-upsert-without-user.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutUserInput } from './client-update-without-user.input';

@InputType()
export class ClientUpdateOneWithoutUserInput {

    @Field(() => ClientCreateWithoutUserInput, {nullable:true})
    create?: ClientCreateWithoutUserInput;

    @Field(() => ClientCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput;

    @Field(() => ClientUpsertWithoutUserInput, {nullable:true})
    upsert?: ClientUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    connect?: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutUserInput, {nullable:true})
    update?: ClientUpdateWithoutUserInput;
}
