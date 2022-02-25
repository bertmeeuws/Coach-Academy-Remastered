import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutInviteInput } from './coach-create-without-invite.input';
import { CoachCreateOrConnectWithoutInviteInput } from './coach-create-or-connect-without-invite.input';
import { CoachUpsertWithoutInviteInput } from './coach-upsert-without-invite.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateWithoutInviteInput } from './coach-update-without-invite.input';

@InputType()
export class CoachUpdateOneRequiredWithoutInviteInput {

    @Field(() => CoachCreateWithoutInviteInput, {nullable:true})
    create?: CoachCreateWithoutInviteInput;

    @Field(() => CoachCreateOrConnectWithoutInviteInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutInviteInput;

    @Field(() => CoachUpsertWithoutInviteInput, {nullable:true})
    upsert?: CoachUpsertWithoutInviteInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;

    @Field(() => CoachUpdateWithoutInviteInput, {nullable:true})
    update?: CoachUpdateWithoutInviteInput;
}
