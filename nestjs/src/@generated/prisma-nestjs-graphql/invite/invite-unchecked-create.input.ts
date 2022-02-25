import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClientUncheckedCreateNestedOneWithoutInviteInput } from '../client/client-unchecked-create-nested-one-without-invite.input';

@InputType()
export class InviteUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    coachId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    invalidated?: Date | string;

    @Field(() => ClientUncheckedCreateNestedOneWithoutInviteInput, {nullable:true})
    client?: ClientUncheckedCreateNestedOneWithoutInviteInput;
}
