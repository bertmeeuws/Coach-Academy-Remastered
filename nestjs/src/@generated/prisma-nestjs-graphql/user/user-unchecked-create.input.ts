import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ClientUncheckedCreateNestedManyWithoutUserInput } from '../client/client-unchecked-create-nested-many-without-user.input';
import { CoachUncheckedCreateNestedManyWithoutUserInput } from '../coach/coach-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

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

    @Field(() => ClientUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Client?: ClientUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CoachUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Coach?: CoachUncheckedCreateNestedManyWithoutUserInput;
}
