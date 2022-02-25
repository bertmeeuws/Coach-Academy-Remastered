import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteScalarWhereInput } from './invite-scalar-where.input';
import { InviteUpdateManyMutationInput } from './invite-update-many-mutation.input';

@InputType()
export class InviteUpdateManyWithWhereWithoutCoachInput {

    @Field(() => InviteScalarWhereInput, {nullable:false})
    where!: InviteScalarWhereInput;

    @Field(() => InviteUpdateManyMutationInput, {nullable:false})
    data!: InviteUpdateManyMutationInput;
}
