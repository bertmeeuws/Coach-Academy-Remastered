import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealWhereInput } from './meal-where.input';

@InputType()
export class MealRelationFilter {

    @Field(() => MealWhereInput, {nullable:true})
    is?: MealWhereInput;

    @Field(() => MealWhereInput, {nullable:true})
    isNot?: MealWhereInput;
}
