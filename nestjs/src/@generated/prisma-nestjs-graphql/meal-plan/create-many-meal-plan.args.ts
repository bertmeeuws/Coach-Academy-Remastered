import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanCreateManyInput } from './meal-plan-create-many.input';

@ArgsType()
export class CreateManyMealPlanArgs {

    @Field(() => [MealPlanCreateManyInput], {nullable:false})
    data!: Array<MealPlanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
