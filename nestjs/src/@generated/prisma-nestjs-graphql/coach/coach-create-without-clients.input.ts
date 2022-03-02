import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCoachInput } from '../user/user-create-nested-one-without-coach.input';
import { InviteCreateNestedManyWithoutCoachInput } from '../invite/invite-create-nested-many-without-coach.input';
import { DietplanCreateNestedManyWithoutCoachInput } from '../dietplan/dietplan-create-nested-many-without-coach.input';

@InputType()
export class CoachCreateWithoutClientsInput {

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutCoachInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCoachInput;

    @Field(() => InviteCreateNestedManyWithoutCoachInput, {nullable:true})
    Invite?: InviteCreateNestedManyWithoutCoachInput;

    @Field(() => DietplanCreateNestedManyWithoutCoachInput, {nullable:true})
    Dietplan?: DietplanCreateNestedManyWithoutCoachInput;
}
