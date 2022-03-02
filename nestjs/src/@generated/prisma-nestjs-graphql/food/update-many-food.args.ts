import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodUpdateManyMutationInput } from './food-update-many-mutation.input';
import { FoodWhereInput } from './food-where.input';

@ArgsType()
export class UpdateManyFoodArgs {

    @Field(() => FoodUpdateManyMutationInput, {nullable:false})
    data!: FoodUpdateManyMutationInput;

    @Field(() => FoodWhereInput, {nullable:true})
    where?: FoodWhereInput;
}
