import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CoachCreateNestedOneWithoutUserInput } from '../coach/coach-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutClientInput {

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CoachCreateNestedOneWithoutUserInput, {nullable:true})
    coach?: CoachCreateNestedOneWithoutUserInput;
}
