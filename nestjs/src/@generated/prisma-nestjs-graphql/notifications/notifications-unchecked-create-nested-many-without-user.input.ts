import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationsCreateWithoutUserInput } from './notifications-create-without-user.input';
import { NotificationsCreateOrConnectWithoutUserInput } from './notifications-create-or-connect-without-user.input';
import { NotificationsCreateManyUserInputEnvelope } from './notifications-create-many-user-input-envelope.input';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';

@InputType()
export class NotificationsUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [NotificationsCreateWithoutUserInput], {nullable:true})
    create?: Array<NotificationsCreateWithoutUserInput>;

    @Field(() => [NotificationsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<NotificationsCreateOrConnectWithoutUserInput>;

    @Field(() => NotificationsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: NotificationsCreateManyUserInputEnvelope;

    @Field(() => [NotificationsWhereUniqueInput], {nullable:true})
    connect?: Array<NotificationsWhereUniqueInput>;
}
