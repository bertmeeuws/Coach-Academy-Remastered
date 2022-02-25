import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { InviteCreateWithoutCoachInput } from './invite-create-without-coach.input';

@InputType()
export class InviteCreateOrConnectWithoutCoachInput {

    @Field(() => InviteWhereUniqueInput, {nullable:false})
    where!: InviteWhereUniqueInput;

    @Field(() => InviteCreateWithoutCoachInput, {nullable:false})
    create!: InviteCreateWithoutCoachInput;
}
