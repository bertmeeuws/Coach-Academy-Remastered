import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';
import { NotificationsCreateWithoutUserInput } from './notifications-create-without-user.input';

@InputType()
export class NotificationsCreateOrConnectWithoutUserInput {

    @Field(() => NotificationsWhereUniqueInput, {nullable:false})
    where!: NotificationsWhereUniqueInput;

    @Field(() => NotificationsCreateWithoutUserInput, {nullable:false})
    create!: NotificationsCreateWithoutUserInput;
}
