import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCoachInput } from './user-update-without-coach.input';
import { UserCreateWithoutCoachInput } from './user-create-without-coach.input';

@InputType()
export class UserUpsertWithoutCoachInput {

    @Field(() => UserUpdateWithoutCoachInput, {nullable:false})
    update!: UserUpdateWithoutCoachInput;

    @Field(() => UserCreateWithoutCoachInput, {nullable:false})
    create!: UserCreateWithoutCoachInput;
}
