import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealUpdateWithoutDietplanInput } from './meal-update-without-dietplan.input';
import { MealCreateWithoutDietplanInput } from './meal-create-without-dietplan.input';

@InputType()
export class MealUpsertWithWhereUniqueWithoutDietplanInput {

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;

    @Field(() => MealUpdateWithoutDietplanInput, {nullable:false})
    update!: MealUpdateWithoutDietplanInput;

    @Field(() => MealCreateWithoutDietplanInput, {nullable:false})
    create!: MealCreateWithoutDietplanInput;
}
