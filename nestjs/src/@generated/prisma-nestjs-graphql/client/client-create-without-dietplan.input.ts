import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutClientInput } from '../user/user-create-nested-one-without-client.input';
import { CoachCreateNestedOneWithoutClientsInput } from '../coach/coach-create-nested-one-without-clients.input';
import { InviteCreateNestedOneWithoutClientInput } from '../invite/invite-create-nested-one-without-client.input';

@InputType()
export class ClientCreateWithoutDietplanInput {

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    dob?: Date | string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    number?: number;

    @Field(() => Int, {nullable:true})
    postal?: number;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => UserCreateNestedOneWithoutClientInput, {nullable:false})
    user!: UserCreateNestedOneWithoutClientInput;

    @Field(() => CoachCreateNestedOneWithoutClientsInput, {nullable:true})
    coach?: CoachCreateNestedOneWithoutClientsInput;

    @Field(() => InviteCreateNestedOneWithoutClientInput, {nullable:true})
    invite?: InviteCreateNestedOneWithoutClientInput;
}
