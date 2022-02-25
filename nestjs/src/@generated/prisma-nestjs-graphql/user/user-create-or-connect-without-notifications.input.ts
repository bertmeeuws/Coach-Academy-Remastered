import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutNotificationsInput } from './user-create-without-notifications.input';

@InputType()
export class UserCreateOrConnectWithoutNotificationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutNotificationsInput, {nullable:false})
    create!: UserCreateWithoutNotificationsInput;
}
