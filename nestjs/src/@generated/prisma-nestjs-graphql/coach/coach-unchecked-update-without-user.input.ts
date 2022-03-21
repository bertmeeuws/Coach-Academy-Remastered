import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ClientUncheckedUpdateManyWithoutCoachInput } from '../client/client-unchecked-update-many-without-coach.input';
import { InviteUncheckedUpdateManyWithoutCoachInput } from '../invite/invite-unchecked-update-many-without-coach.input';
import { DietplanUncheckedUpdateManyWithoutCoachInput } from '../dietplan/dietplan-unchecked-update-many-without-coach.input';
import { WorkoutUncheckedUpdateManyWithoutCoachInput } from '../workout/workout-unchecked-update-many-without-coach.input';

@InputType()
export class CoachUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    surname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ClientUncheckedUpdateManyWithoutCoachInput, {nullable:true})
    clients?: ClientUncheckedUpdateManyWithoutCoachInput;

    @Field(() => InviteUncheckedUpdateManyWithoutCoachInput, {nullable:true})
    Invite?: InviteUncheckedUpdateManyWithoutCoachInput;

    @Field(() => DietplanUncheckedUpdateManyWithoutCoachInput, {nullable:true})
    Dietplan?: DietplanUncheckedUpdateManyWithoutCoachInput;

    @Field(() => WorkoutUncheckedUpdateManyWithoutCoachInput, {nullable:true})
    Workout?: WorkoutUncheckedUpdateManyWithoutCoachInput;
}
