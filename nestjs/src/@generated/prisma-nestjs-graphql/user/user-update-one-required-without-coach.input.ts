import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCoachInput } from './user-create-without-coach.input';
import { UserCreateOrConnectWithoutCoachInput } from './user-create-or-connect-without-coach.input';
import { UserUpsertWithoutCoachInput } from './user-upsert-without-coach.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCoachInput } from './user-update-without-coach.input';

@InputType()
export class UserUpdateOneRequiredWithoutCoachInput {

    @Field(() => UserCreateWithoutCoachInput, {nullable:true})
    create?: UserCreateWithoutCoachInput;

    @Field(() => UserCreateOrConnectWithoutCoachInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput;

    @Field(() => UserUpsertWithoutCoachInput, {nullable:true})
    upsert?: UserUpsertWithoutCoachInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCoachInput, {nullable:true})
    update?: UserUpdateWithoutCoachInput;
}
