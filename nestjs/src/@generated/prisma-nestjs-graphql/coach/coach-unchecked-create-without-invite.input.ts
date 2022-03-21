import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClientUncheckedCreateNestedManyWithoutCoachInput } from '../client/client-unchecked-create-nested-many-without-coach.input';
import { DietplanUncheckedCreateNestedManyWithoutCoachInput } from '../dietplan/dietplan-unchecked-create-nested-many-without-coach.input';
import { WorkoutUncheckedCreateNestedManyWithoutCoachInput } from '../workout/workout-unchecked-create-nested-many-without-coach.input';

@InputType()
export class CoachUncheckedCreateWithoutInviteInput {

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

    @Field(() => DietplanUncheckedCreateNestedManyWithoutCoachInput, {nullable:true})
    Dietplan?: DietplanUncheckedCreateNestedManyWithoutCoachInput;

    @Field(() => WorkoutUncheckedCreateNestedManyWithoutCoachInput, {nullable:true})
    Workout?: WorkoutUncheckedCreateNestedManyWithoutCoachInput;
}
