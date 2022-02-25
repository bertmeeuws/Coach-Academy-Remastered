import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { InviteCreateInput } from './invite-create.input';
import { InviteUpdateInput } from './invite-update.input';

@ArgsType()
export class UpsertOneInviteArgs {

    @Field(() => InviteWhereUniqueInput, {nullable:false})
    where!: InviteWhereUniqueInput;

    @Field(() => InviteCreateInput, {nullable:false})
    create!: InviteCreateInput;

    @Field(() => InviteUpdateInput, {nullable:false})
    update!: InviteUpdateInput;
}
