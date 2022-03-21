import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutClientInput } from '../user/user-create-nested-one-without-client.input';
import { CoachCreateNestedOneWithoutClientsInput } from '../coach/coach-create-nested-one-without-clients.input';
import { DietplanCreateNestedManyWithoutClientInput } from '../dietplan/dietplan-create-nested-many-without-client.input';
import { WorkoutCreateNestedManyWithoutClientInput } from '../workout/workout-create-nested-many-without-client.input';

@InputType()
export class ClientCreateWithoutInviteInput {

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    dob?: Date | string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    number?: number;

    @Field(() => Int, {nullable:true})
    postal?: number;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => UserCreateNestedOneWithoutClientInput, {nullable:false})
    user!: UserCreateNestedOneWithoutClientInput;

    @Field(() => CoachCreateNestedOneWithoutClientsInput, {nullable:true})
    coach?: CoachCreateNestedOneWithoutClientsInput;

    @Field(() => DietplanCreateNestedManyWithoutClientInput, {nullable:true})
    Dietplan?: DietplanCreateNestedManyWithoutClientInput;

    @Field(() => WorkoutCreateNestedManyWithoutClientInput, {nullable:true})
    Workout?: WorkoutCreateNestedManyWithoutClientInput;
}
