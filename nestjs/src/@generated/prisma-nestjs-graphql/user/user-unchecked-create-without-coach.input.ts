import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ClientUncheckedCreateNestedOneWithoutUserInput } from '../client/client-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCoachInput {

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

    @Field(() => ClientUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    client?: ClientUncheckedCreateNestedOneWithoutUserInput;
}
