import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InviteUncheckedCreateNestedManyWithoutCoachInput } from '../invite/invite-unchecked-create-nested-many-without-coach.input';
import { DietplanUncheckedCreateNestedManyWithoutCoachInput } from '../dietplan/dietplan-unchecked-create-nested-many-without-coach.input';

@InputType()
export class CoachUncheckedCreateWithoutClientsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => InviteUncheckedCreateNestedManyWithoutCoachInput, {nullable:true})
    Invite?: InviteUncheckedCreateNestedManyWithoutCoachInput;

    @Field(() => DietplanUncheckedCreateNestedManyWithoutCoachInput, {nullable:true})
    Dietplan?: DietplanUncheckedCreateNestedManyWithoutCoachInput;
}
