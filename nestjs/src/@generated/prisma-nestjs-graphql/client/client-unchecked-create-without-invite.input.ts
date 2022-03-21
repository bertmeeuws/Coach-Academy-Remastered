import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DietplanUncheckedCreateNestedManyWithoutClientInput } from '../dietplan/dietplan-unchecked-create-nested-many-without-client.input';
import { WorkoutUncheckedCreateNestedManyWithoutClientInput } from '../workout/workout-unchecked-create-nested-many-without-client.input';

@InputType()
export class ClientUncheckedCreateWithoutInviteInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

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

    @Field(() => Int, {nullable:true})
    coachId?: number;

    @Field(() => DietplanUncheckedCreateNestedManyWithoutClientInput, {nullable:true})
    Dietplan?: DietplanUncheckedCreateNestedManyWithoutClientInput;

    @Field(() => WorkoutUncheckedCreateNestedManyWithoutClientInput, {nullable:true})
    Workout?: WorkoutUncheckedCreateNestedManyWithoutClientInput;
}
