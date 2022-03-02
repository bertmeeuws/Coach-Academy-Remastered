import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealCreateWithoutDietplanInput } from './meal-create-without-dietplan.input';

@InputType()
export class MealCreateOrConnectWithoutDietplanInput {

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;

    @Field(() => MealCreateWithoutDietplanInput, {nullable:false})
    create!: MealCreateWithoutDietplanInput;
}
