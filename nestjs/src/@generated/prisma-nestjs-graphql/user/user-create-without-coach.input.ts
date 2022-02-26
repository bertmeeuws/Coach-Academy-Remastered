import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ClientCreateNestedOneWithoutUserInput } from '../client/client-create-nested-one-without-user.input';
import { NotificationsCreateNestedManyWithoutUserInput } from '../notifications/notifications-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutCoachInput {

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    profile_image?: string;

    @Field(() => ClientCreateNestedOneWithoutUserInput, {nullable:true})
    client?: ClientCreateNestedOneWithoutUserInput;

    @Field(() => NotificationsCreateNestedManyWithoutUserInput, {nullable:true})
    Notifications?: NotificationsCreateNestedManyWithoutUserInput;
}
