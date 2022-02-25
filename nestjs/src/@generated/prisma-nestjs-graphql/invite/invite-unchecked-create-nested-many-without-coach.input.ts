import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteCreateWithoutCoachInput } from './invite-create-without-coach.input';
import { InviteCreateOrConnectWithoutCoachInput } from './invite-create-or-connect-without-coach.input';
import { InviteCreateManyCoachInputEnvelope } from './invite-create-many-coach-input-envelope.input';
import { InviteWhereUniqueInput } from './invite-where-unique.input';

@InputType()
export class InviteUncheckedCreateNestedManyWithoutCoachInput {

    @Field(() => [InviteCreateWithoutCoachInput], {nullable:true})
    create?: Array<InviteCreateWithoutCoachInput>;

    @Field(() => [InviteCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<InviteCreateOrConnectWithoutCoachInput>;

    @Field(() => InviteCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: InviteCreateManyCoachInputEnvelope;

    @Field(() => [InviteWhereUniqueInput], {nullable:true})
    connect?: Array<InviteWhereUniqueInput>;
}
