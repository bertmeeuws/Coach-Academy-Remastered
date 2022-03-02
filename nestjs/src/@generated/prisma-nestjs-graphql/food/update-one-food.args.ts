import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodUpdateInput } from './food-update.input';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@ArgsType()
export class UpdateOneFoodArgs {

    @Field(() => FoodUpdateInput, {nullable:false})
    data!: FoodUpdateInput;

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    where!: FoodWhereUniqueInput;
}
