import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutClientInput } from './user-create-without-client.input';

@InputType()
export class UserCreateOrConnectWithoutClientInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutClientInput, {nullable:false})
    create!: UserCreateWithoutClientInput;
}
