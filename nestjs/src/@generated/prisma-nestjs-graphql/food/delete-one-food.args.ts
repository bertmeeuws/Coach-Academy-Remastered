import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@ArgsType()
export class DeleteOneFoodArgs {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    where!: FoodWhereUniqueInput;
}
