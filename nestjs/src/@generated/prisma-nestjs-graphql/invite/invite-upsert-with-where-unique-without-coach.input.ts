import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { InviteUpdateWithoutCoachInput } from './invite-update-without-coach.input';
import { InviteCreateWithoutCoachInput } from './invite-create-without-coach.input';

@InputType()
export class InviteUpsertWithWhereUniqueWithoutCoachInput {

    @Field(() => InviteWhereUniqueInput, {nullable:false})
    where!: InviteWhereUniqueInput;

    @Field(() => InviteUpdateWithoutCoachInput, {nullable:false})
    update!: InviteUpdateWithoutCoachInput;

    @Field(() => InviteCreateWithoutCoachInput, {nullable:false})
    create!: InviteCreateWithoutCoachInput;
}
