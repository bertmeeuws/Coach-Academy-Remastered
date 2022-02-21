import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClientInput } from './user-create-without-client.input';
import { UserCreateOrConnectWithoutClientInput } from './user-create-or-connect-without-client.input';
import { UserUpsertWithoutClientInput } from './user-upsert-without-client.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutClientInput } from './user-update-without-client.input';

@InputType()
export class UserUpdateOneRequiredWithoutClientInput {

    @Field(() => UserCreateWithoutClientInput, {nullable:true})
    create?: UserCreateWithoutClientInput;

    @Field(() => UserCreateOrConnectWithoutClientInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutClientInput;

    @Field(() => UserUpsertWithoutClientInput, {nullable:true})
    upsert?: UserUpsertWithoutClientInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutClientInput, {nullable:true})
    update?: UserUpdateWithoutClientInput;
}
