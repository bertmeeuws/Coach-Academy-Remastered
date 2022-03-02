import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealCreateManyInput } from './meal-create-many.input';

@ArgsType()
export class CreateManyMealArgs {

    @Field(() => [MealCreateManyInput], {nullable:false})
    data!: Array<MealCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
