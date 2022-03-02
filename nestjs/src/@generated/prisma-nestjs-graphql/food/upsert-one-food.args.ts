import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodCreateInput } from './food-create.input';
import { FoodUpdateInput } from './food-update.input';

@ArgsType()
export class UpsertOneFoodArgs {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    where!: FoodWhereUniqueInput;

    @Field(() => FoodCreateInput, {nullable:false})
    create!: FoodCreateInput;

    @Field(() => FoodUpdateInput, {nullable:false})
    update!: FoodUpdateInput;
}
