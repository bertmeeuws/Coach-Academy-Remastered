import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';
import { NotificationsUpdateWithoutUserInput } from './notifications-update-without-user.input';
import { NotificationsCreateWithoutUserInput } from './notifications-create-without-user.input';

@InputType()
export class NotificationsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => NotificationsWhereUniqueInput, {nullable:false})
    where!: NotificationsWhereUniqueInput;

    @Field(() => NotificationsUpdateWithoutUserInput, {nullable:false})
    update!: NotificationsUpdateWithoutUserInput;

    @Field(() => NotificationsCreateWithoutUserInput, {nullable:false})
    create!: NotificationsCreateWithoutUserInput;
}
