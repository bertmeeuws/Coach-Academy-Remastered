import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealWhereInput } from './meal-where.input';

@InputType()
export class MealListRelationFilter {

    @Field(() => MealWhereInput, {nullable:true})
    every?: MealWhereInput;

    @Field(() => MealWhereInput, {nullable:true})
    some?: MealWhereInput;

    @Field(() => MealWhereInput, {nullable:true})
    none?: MealWhereInput;
}
