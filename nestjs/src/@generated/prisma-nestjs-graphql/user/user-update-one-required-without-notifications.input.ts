import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNotificationsInput } from './user-create-without-notifications.input';
import { UserCreateOrConnectWithoutNotificationsInput } from './user-create-or-connect-without-notifications.input';
import { UserUpsertWithoutNotificationsInput } from './user-upsert-without-notifications.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutNotificationsInput } from './user-update-without-notifications.input';

@InputType()
export class UserUpdateOneRequiredWithoutNotificationsInput {

    @Field(() => UserCreateWithoutNotificationsInput, {nullable:true})
    create?: UserCreateWithoutNotificationsInput;

    @Field(() => UserCreateOrConnectWithoutNotificationsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;

    @Field(() => UserUpsertWithoutNotificationsInput, {nullable:true})
    upsert?: UserUpsertWithoutNotificationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutNotificationsInput, {nullable:true})
    update?: UserUpdateWithoutNotificationsInput;
}
