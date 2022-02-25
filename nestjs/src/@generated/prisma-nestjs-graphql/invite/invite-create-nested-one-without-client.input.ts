import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteCreateWithoutClientInput } from './invite-create-without-client.input';
import { InviteCreateOrConnectWithoutClientInput } from './invite-create-or-connect-without-client.input';
import { InviteWhereUniqueInput } from './invite-where-unique.input';

@InputType()
export class InviteCreateNestedOneWithoutClientInput {

    @Field(() => InviteCreateWithoutClientInput, {nullable:true})
    create?: InviteCreateWithoutClientInput;

    @Field(() => InviteCreateOrConnectWithoutClientInput, {nullable:true})
    connectOrCreate?: InviteCreateOrConnectWithoutClientInput;

    @Field(() => InviteWhereUniqueInput, {nullable:true})
    connect?: InviteWhereUniqueInput;
}
