import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutNotificationsInput } from './user-update-without-notifications.input';
import { UserCreateWithoutNotificationsInput } from './user-create-without-notifications.input';

@InputType()
export class UserUpsertWithoutNotificationsInput {

    @Field(() => UserUpdateWithoutNotificationsInput, {nullable:false})
    update!: UserUpdateWithoutNotificationsInput;

    @Field(() => UserCreateWithoutNotificationsInput, {nullable:false})
    create!: UserCreateWithoutNotificationsInput;
}
