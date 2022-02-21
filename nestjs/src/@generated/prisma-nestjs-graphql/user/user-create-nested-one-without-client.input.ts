import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClientInput } from './user-create-without-client.input';
import { UserCreateOrConnectWithoutClientInput } from './user-create-or-connect-without-client.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutClientInput {

    @Field(() => UserCreateWithoutClientInput, {nullable:true})
    create?: UserCreateWithoutClientInput;

    @Field(() => UserCreateOrConnectWithoutClientInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutClientInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
