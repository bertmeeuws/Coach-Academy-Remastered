import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';

@ArgsType()
export class DeleteManyFoodArgs {

    @Field(() => FoodWhereInput, {nullable:true})
    where?: FoodWhereInput;
}
