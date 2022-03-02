import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateNestedOneWithoutDietplanInput } from '../coach/coach-create-nested-one-without-dietplan.input';
import { MealCreateNestedManyWithoutDietplanInput } from '../meal/meal-create-nested-many-without-dietplan.input';

@InputType()
export class DietplanCreateWithoutClientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CoachCreateNestedOneWithoutDietplanInput, {nullable:false})
    coach!: CoachCreateNestedOneWithoutDietplanInput;

    @Field(() => MealCreateNestedManyWithoutDietplanInput, {nullable:true})
    Meal?: MealCreateNestedManyWithoutDietplanInput;
}
