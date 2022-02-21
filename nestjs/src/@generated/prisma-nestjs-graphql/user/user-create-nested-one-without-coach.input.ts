import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCoachInput } from './user-create-without-coach.input';
import { UserCreateOrConnectWithoutCoachInput } from './user-create-or-connect-without-coach.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCoachInput {

    @Field(() => UserCreateWithoutCoachInput, {nullable:true})
    create?: UserCreateWithoutCoachInput;

    @Field(() => UserCreateOrConnectWithoutCoachInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
