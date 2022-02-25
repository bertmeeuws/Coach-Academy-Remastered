import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateNestedOneWithoutInviteInput } from '../coach/coach-create-nested-one-without-invite.input';
import { ClientCreateNestedOneWithoutInviteInput } from '../client/client-create-nested-one-without-invite.input';

@InputType()
export class InviteCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    invalidated?: Date | string;

    @Field(() => CoachCreateNestedOneWithoutInviteInput, {nullable:false})
    coach!: CoachCreateNestedOneWithoutInviteInput;

    @Field(() => ClientCreateNestedOneWithoutInviteInput, {nullable:true})
    client?: ClientCreateNestedOneWithoutInviteInput;
}
