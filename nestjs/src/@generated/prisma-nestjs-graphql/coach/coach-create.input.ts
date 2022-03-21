import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCoachInput } from '../user/user-create-nested-one-without-coach.input';
import { ClientCreateNestedManyWithoutCoachInput } from '../client/client-create-nested-many-without-coach.input';
import { InviteCreateNestedManyWithoutCoachInput } from '../invite/invite-create-nested-many-without-coach.input';
import { DietplanCreateNestedManyWithoutCoachInput } from '../dietplan/dietplan-create-nested-many-without-coach.input';
import { WorkoutCreateNestedManyWithoutCoachInput } from '../workout/workout-create-nested-many-without-coach.input';

@InputType()
export class CoachCreateInput {

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutCoachInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCoachInput;

    @Field(() => ClientCreateNestedManyWithoutCoachInput, {nullable:true})
    clients?: ClientCreateNestedManyWithoutCoachInput;

    @Field(() => InviteCreateNestedManyWithoutCoachInput, {nullable:true})
    Invite?: InviteCreateNestedManyWithoutCoachInput;

    @Field(() => DietplanCreateNestedManyWithoutCoachInput, {nullable:true})
    Dietplan?: DietplanCreateNestedManyWithoutCoachInput;

    @Field(() => WorkoutCreateNestedManyWithoutCoachInput, {nullable:true})
    Workout?: WorkoutCreateNestedManyWithoutCoachInput;
}
