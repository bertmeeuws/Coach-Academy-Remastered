import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateNestedOneWithoutDietplanInput } from '../client/client-create-nested-one-without-dietplan.input';
import { MealCreateNestedManyWithoutDietplanInput } from '../meal/meal-create-nested-many-without-dietplan.input';

@InputType()
export class DietplanCreateWithoutCoachInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ClientCreateNestedOneWithoutDietplanInput, {nullable:false})
    client!: ClientCreateNestedOneWithoutDietplanInput;

    @Field(() => MealCreateNestedManyWithoutDietplanInput, {nullable:true})
    Meal?: MealCreateNestedManyWithoutDietplanInput;
}
