import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNotificationsInput } from './user-create-without-notifications.input';
import { UserCreateOrConnectWithoutNotificationsInput } from './user-create-or-connect-without-notifications.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutNotificationsInput {

    @Field(() => UserCreateWithoutNotificationsInput, {nullable:true})
    create?: UserCreateWithoutNotificationsInput;

    @Field(() => UserCreateOrConnectWithoutNotificationsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
