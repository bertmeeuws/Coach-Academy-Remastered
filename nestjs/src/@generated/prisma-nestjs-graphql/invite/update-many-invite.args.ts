import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteUpdateManyMutationInput } from './invite-update-many-mutation.input';
import { InviteWhereInput } from './invite-where.input';

@ArgsType()
export class UpdateManyInviteArgs {

    @Field(() => InviteUpdateManyMutationInput, {nullable:false})
    data!: InviteUpdateManyMutationInput;

    @Field(() => InviteWhereInput, {nullable:true})
    where?: InviteWhereInput;
}
