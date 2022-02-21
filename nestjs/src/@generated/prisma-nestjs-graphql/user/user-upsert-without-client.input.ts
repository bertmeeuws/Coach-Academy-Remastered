import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutClientInput } from './user-update-without-client.input';
import { UserCreateWithoutClientInput } from './user-create-without-client.input';

@InputType()
export class UserUpsertWithoutClientInput {

    @Field(() => UserUpdateWithoutClientInput, {nullable:false})
    update!: UserUpdateWithoutClientInput;

    @Field(() => UserCreateWithoutClientInput, {nullable:false})
    create!: UserCreateWithoutClientInput;
}
