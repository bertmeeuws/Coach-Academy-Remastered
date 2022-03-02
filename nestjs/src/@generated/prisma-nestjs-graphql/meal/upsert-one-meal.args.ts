import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { MealCreateInput } from './meal-create.input';
import { MealUpdateInput } from './meal-update.input';

@ArgsType()
export class UpsertOneMealArgs {

    @Field(() => MealWhereUniqueInput, {nullable:false})
    where!: MealWhereUniqueInput;

    @Field(() => MealCreateInput, {nullable:false})
    create!: MealCreateInput;

    @Field(() => MealUpdateInput, {nullable:false})
    update!: MealUpdateInput;
}
