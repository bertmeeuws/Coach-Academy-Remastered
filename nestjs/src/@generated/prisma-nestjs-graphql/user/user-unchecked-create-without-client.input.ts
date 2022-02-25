import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CoachUncheckedCreateNestedOneWithoutUserInput } from '../coach/coach-unchecked-create-nested-one-without-user.input';
import { NotificationsUncheckedCreateNestedManyWithoutUserInput } from '../notifications/notifications-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutClientInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => CoachUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => NotificationsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput;
}
