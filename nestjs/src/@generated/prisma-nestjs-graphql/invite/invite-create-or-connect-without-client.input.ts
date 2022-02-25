import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { InviteCreateWithoutClientInput } from './invite-create-without-client.input';

@InputType()
export class InviteCreateOrConnectWithoutClientInput {

    @Field(() => InviteWhereUniqueInput, {nullable:false})
    where!: InviteWhereUniqueInput;

    @Field(() => InviteCreateWithoutClientInput, {nullable:false})
    create!: InviteCreateWithoutClientInput;
}
