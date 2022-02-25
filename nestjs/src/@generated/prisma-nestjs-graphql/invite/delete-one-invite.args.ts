import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteWhereUniqueInput } from './invite-where-unique.input';

@ArgsType()
export class DeleteOneInviteArgs {

    @Field(() => InviteWhereUniqueInput, {nullable:false})
    where!: InviteWhereUniqueInput;
}
