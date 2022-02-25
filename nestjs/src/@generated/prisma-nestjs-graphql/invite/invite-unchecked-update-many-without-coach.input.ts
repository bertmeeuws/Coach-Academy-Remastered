import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteCreateWithoutCoachInput } from './invite-create-without-coach.input';
import { InviteCreateOrConnectWithoutCoachInput } from './invite-create-or-connect-without-coach.input';
import { InviteUpsertWithWhereUniqueWithoutCoachInput } from './invite-upsert-with-where-unique-without-coach.input';
import { InviteCreateManyCoachInputEnvelope } from './invite-create-many-coach-input-envelope.input';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { InviteUpdateWithWhereUniqueWithoutCoachInput } from './invite-update-with-where-unique-without-coach.input';
import { InviteUpdateManyWithWhereWithoutCoachInput } from './invite-update-many-with-where-without-coach.input';
import { InviteScalarWhereInput } from './invite-scalar-where.input';

@InputType()
export class InviteUncheckedUpdateManyWithoutCoachInput {

    @Field(() => [InviteCreateWithoutCoachInput], {nullable:true})
    create?: Array<InviteCreateWithoutCoachInput>;

    @Field(() => [InviteCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<InviteCreateOrConnectWithoutCoachInput>;

    @Field(() => [InviteUpsertWithWhereUniqueWithoutCoachInput], {nullable:true})
    upsert?: Array<InviteUpsertWithWhereUniqueWithoutCoachInput>;

    @Field(() => InviteCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: InviteCreateManyCoachInputEnvelope;

    @Field(() => [InviteWhereUniqueInput], {nullable:true})
    set?: Array<InviteWhereUniqueInput>;

    @Field(() => [InviteWhereUniqueInput], {nullable:true})
    disconnect?: Array<InviteWhereUniqueInput>;

    @Field(() => [InviteWhereUniqueInput], {nullable:true})
    delete?: Array<InviteWhereUniqueInput>;

    @Field(() => [InviteWhereUniqueInput], {nullable:true})
    connect?: Array<InviteWhereUniqueInput>;

    @Field(() => [InviteUpdateWithWhereUniqueWithoutCoachInput], {nullable:true})
    update?: Array<InviteUpdateWithWhereUniqueWithoutCoachInput>;

    @Field(() => [InviteUpdateManyWithWhereWithoutCoachInput], {nullable:true})
    updateMany?: Array<InviteUpdateManyWithWhereWithoutCoachInput>;

    @Field(() => [InviteScalarWhereInput], {nullable:true})
    deleteMany?: Array<InviteScalarWhereInput>;
}
