import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateNestedOneWithoutDietplanInput } from '../coach/coach-create-nested-one-without-dietplan.input';
import { ClientCreateNestedOneWithoutDietplanInput } from '../client/client-create-nested-one-without-dietplan.input';

@InputType()
export class DietplanCreateWithoutMealInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CoachCreateNestedOneWithoutDietplanInput, {nullable:false})
    coach!: CoachCreateNestedOneWithoutDietplanInput;

    @Field(() => ClientCreateNestedOneWithoutDietplanInput, {nullable:false})
    client!: ClientCreateNestedOneWithoutDietplanInput;
}
