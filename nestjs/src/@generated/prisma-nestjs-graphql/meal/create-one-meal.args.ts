import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealCreateInput } from './meal-create.input';

@ArgsType()
export class CreateOneMealArgs {

    @Field(() => MealCreateInput, {nullable:false})
    data!: MealCreateInput;
}
