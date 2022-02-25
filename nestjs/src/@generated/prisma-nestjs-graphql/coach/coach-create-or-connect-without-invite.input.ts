import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachCreateWithoutInviteInput } from './coach-create-without-invite.input';

@InputType()
export class CoachCreateOrConnectWithoutInviteInput {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    where!: CoachWhereUniqueInput;

    @Field(() => CoachCreateWithoutInviteInput, {nullable:false})
    create!: CoachCreateWithoutInviteInput;
}
