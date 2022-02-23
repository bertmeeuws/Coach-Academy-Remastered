import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CoachCreateNestedManyWithoutUserInput } from '../coach/coach-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutClientInput {

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => CoachCreateNestedManyWithoutUserInput, {nullable:true})
    Coach?: CoachCreateNestedManyWithoutUserInput;
}
