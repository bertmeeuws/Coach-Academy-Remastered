import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteUpdateInput } from './invite-update.input';
import { InviteWhereUniqueInput } from './invite-where-unique.input';

@ArgsType()
export class UpdateOneInviteArgs {

    @Field(() => InviteUpdateInput, {nullable:false})
    data!: InviteUpdateInput;

    @Field(() => InviteWhereUniqueInput, {nullable:false})
    where!: InviteWhereUniqueInput;
}
