import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCoachInput } from '../user/user-create-nested-one-without-coach.input';
import { ClientCreateNestedManyWithoutCoachInput } from '../client/client-create-nested-many-without-coach.input';

@InputType()
export class CoachCreateWithoutInviteInput {

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutCoachInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCoachInput;

    @Field(() => ClientCreateNestedManyWithoutCoachInput, {nullable:true})
    clients?: ClientCreateNestedManyWithoutCoachInput;
}
