import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteCreateWithoutClientInput } from './invite-create-without-client.input';
import { InviteCreateOrConnectWithoutClientInput } from './invite-create-or-connect-without-client.input';
import { InviteUpsertWithoutClientInput } from './invite-upsert-without-client.input';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { InviteUpdateWithoutClientInput } from './invite-update-without-client.input';

@InputType()
export class InviteUpdateOneWithoutClientInput {

    @Field(() => InviteCreateWithoutClientInput, {nullable:true})
    create?: InviteCreateWithoutClientInput;

    @Field(() => InviteCreateOrConnectWithoutClientInput, {nullable:true})
    connectOrCreate?: InviteCreateOrConnectWithoutClientInput;

    @Field(() => InviteUpsertWithoutClientInput, {nullable:true})
    upsert?: InviteUpsertWithoutClientInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => InviteWhereUniqueInput, {nullable:true})
    connect?: InviteWhereUniqueInput;

    @Field(() => InviteUpdateWithoutClientInput, {nullable:true})
    update?: InviteUpdateWithoutClientInput;
}
