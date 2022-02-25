import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { InviteUpdateWithoutCoachInput } from './invite-update-without-coach.input';

@InputType()
export class InviteUpdateWithWhereUniqueWithoutCoachInput {

    @Field(() => InviteWhereUniqueInput, {nullable:false})
    where!: InviteWhereUniqueInput;

    @Field(() => InviteUpdateWithoutCoachInput, {nullable:false})
    data!: InviteUpdateWithoutCoachInput;
}
