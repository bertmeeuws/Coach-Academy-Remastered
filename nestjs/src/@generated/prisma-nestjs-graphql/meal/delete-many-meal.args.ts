import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealWhereInput } from './meal-where.input';

@ArgsType()
export class DeleteManyMealArgs {

    @Field(() => MealWhereInput, {nullable:true})
    where?: MealWhereInput;
}
