import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCoachInput } from './user-create-without-coach.input';

@InputType()
export class UserCreateOrConnectWithoutCoachInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCoachInput, {nullable:false})
    create!: UserCreateWithoutCoachInput;
}
