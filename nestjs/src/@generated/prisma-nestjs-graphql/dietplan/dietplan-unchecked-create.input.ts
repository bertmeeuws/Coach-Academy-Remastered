import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealUncheckedCreateNestedManyWithoutDietplanInput } from '../meal/meal-unchecked-create-nested-many-without-dietplan.input';

@InputType()
export class DietplanUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    coachId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => MealUncheckedCreateNestedManyWithoutDietplanInput, {nullable:true})
    Meal?: MealUncheckedCreateNestedManyWithoutDietplanInput;
}
