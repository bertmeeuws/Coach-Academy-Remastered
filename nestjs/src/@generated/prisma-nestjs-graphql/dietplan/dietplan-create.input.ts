import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateNestedOneWithoutDietplanInput } from '../coach/coach-create-nested-one-without-dietplan.input';
import { ClientCreateNestedOneWithoutDietplanInput } from '../client/client-create-nested-one-without-dietplan.input';
import { MealCreateNestedManyWithoutDietplanInput } from '../meal/meal-create-nested-many-without-dietplan.input';

@InputType()
export class DietplanCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CoachCreateNestedOneWithoutDietplanInput, {nullable:false})
    coach!: CoachCreateNestedOneWithoutDietplanInput;

    @Field(() => ClientCreateNestedOneWithoutDietplanInput, {nullable:false})
    client!: ClientCreateNestedOneWithoutDietplanInput;

    @Field(() => MealCreateNestedManyWithoutDietplanInput, {nullable:true})
    Meal?: MealCreateNestedManyWithoutDietplanInput;
}
