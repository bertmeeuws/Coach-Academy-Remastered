import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteCreateInput } from './invite-create.input';

@ArgsType()
export class CreateOneInviteArgs {

    @Field(() => InviteCreateInput, {nullable:false})
    data!: InviteCreateInput;
}
