import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClientUncheckedCreateNestedManyWithoutCoachInput } from '../client/client-unchecked-create-nested-many-without-coach.input';
import { InviteUncheckedCreateNestedManyWithoutCoachInput } from '../invite/invite-unchecked-create-nested-many-without-coach.input';

@InputType()
export class CoachUncheckedCreateWithoutDietplanInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ClientUncheckedCreateNestedManyWithoutCoachInput, {nullable:true})
    clients?: ClientUncheckedCreateNestedManyWithoutCoachInput;

    @Field(() => InviteUncheckedCreateNestedManyWithoutCoachInput, {nullable:true})
    Invite?: InviteUncheckedCreateNestedManyWithoutCoachInput;
}
