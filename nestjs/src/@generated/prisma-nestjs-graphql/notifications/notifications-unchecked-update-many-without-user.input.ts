import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationsCreateWithoutUserInput } from './notifications-create-without-user.input';
import { NotificationsCreateOrConnectWithoutUserInput } from './notifications-create-or-connect-without-user.input';
import { NotificationsUpsertWithWhereUniqueWithoutUserInput } from './notifications-upsert-with-where-unique-without-user.input';
import { NotificationsCreateManyUserInputEnvelope } from './notifications-create-many-user-input-envelope.input';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';
import { NotificationsUpdateWithWhereUniqueWithoutUserInput } from './notifications-update-with-where-unique-without-user.input';
import { NotificationsUpdateManyWithWhereWithoutUserInput } from './notifications-update-many-with-where-without-user.input';
import { NotificationsScalarWhereInput } from './notifications-scalar-where.input';

@InputType()
export class NotificationsUncheckedUpdateManyWithoutUserInput {

    @Field(() => [NotificationsCreateWithoutUserInput], {nullable:true})
    create?: Array<NotificationsCreateWithoutUserInput>;

    @Field(() => [NotificationsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<NotificationsCreateOrConnectWithoutUserInput>;

    @Field(() => [NotificationsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<NotificationsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => NotificationsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: NotificationsCreateManyUserInputEnvelope;

    @Field(() => [NotificationsWhereUniqueInput], {nullable:true})
    set?: Array<NotificationsWhereUniqueInput>;

    @Field(() => [NotificationsWhereUniqueInput], {nullable:true})
    disconnect?: Array<NotificationsWhereUniqueInput>;

    @Field(() => [NotificationsWhereUniqueInput], {nullable:true})
    delete?: Array<NotificationsWhereUniqueInput>;

    @Field(() => [NotificationsWhereUniqueInput], {nullable:true})
    connect?: Array<NotificationsWhereUniqueInput>;

    @Field(() => [NotificationsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<NotificationsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [NotificationsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<NotificationsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [NotificationsScalarWhereInput], {nullable:true})
    deleteMany?: Array<NotificationsScalarWhereInput>;
}
