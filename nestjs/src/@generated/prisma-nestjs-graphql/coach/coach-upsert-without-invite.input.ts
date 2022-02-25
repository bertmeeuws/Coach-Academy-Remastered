import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachUpdateWithoutInviteInput } from './coach-update-without-invite.input';
import { CoachCreateWithoutInviteInput } from './coach-create-without-invite.input';

@InputType()
export class CoachUpsertWithoutInviteInput {

    @Field(() => CoachUpdateWithoutInviteInput, {nullable:false})
    update!: CoachUpdateWithoutInviteInput;

    @Field(() => CoachCreateWithoutInviteInput, {nullable:false})
    create!: CoachCreateWithoutInviteInput;
}
