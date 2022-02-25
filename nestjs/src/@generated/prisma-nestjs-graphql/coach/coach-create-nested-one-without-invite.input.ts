import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutInviteInput } from './coach-create-without-invite.input';
import { CoachCreateOrConnectWithoutInviteInput } from './coach-create-or-connect-without-invite.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachCreateNestedOneWithoutInviteInput {

    @Field(() => CoachCreateWithoutInviteInput, {nullable:true})
    create?: CoachCreateWithoutInviteInput;

    @Field(() => CoachCreateOrConnectWithoutInviteInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutInviteInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;
}
