import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ClientCreateNestedManyWithoutUserInput } from '../client/client-create-nested-many-without-user.input';
import { CoachCreateNestedManyWithoutUserInput } from '../coach/coach-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => ClientCreateNestedManyWithoutUserInput, {nullable:true})
    Client?: ClientCreateNestedManyWithoutUserInput;

    @Field(() => CoachCreateNestedManyWithoutUserInput, {nullable:true})
    Coach?: CoachCreateNestedManyWithoutUserInput;
}
