import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteCreateManyInput } from './invite-create-many.input';

@ArgsType()
export class CreateManyInviteArgs {

    @Field(() => [InviteCreateManyInput], {nullable:false})
    data!: Array<InviteCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
