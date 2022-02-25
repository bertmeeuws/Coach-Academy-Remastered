import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteWhereInput } from './invite-where.input';

@ArgsType()
export class DeleteManyInviteArgs {

    @Field(() => InviteWhereInput, {nullable:true})
    where?: InviteWhereInput;
}
