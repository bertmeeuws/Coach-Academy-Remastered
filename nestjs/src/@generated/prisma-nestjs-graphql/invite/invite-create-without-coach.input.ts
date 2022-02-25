import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateNestedOneWithoutInviteInput } from '../client/client-create-nested-one-without-invite.input';

@InputType()
export class InviteCreateWithoutCoachInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    invalidated?: Date | string;

    @Field(() => ClientCreateNestedOneWithoutInviteInput, {nullable:true})
    client?: ClientCreateNestedOneWithoutInviteInput;
}
