import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCreateInput } from './food-create.input';

@ArgsType()
export class CreateOneFoodArgs {

    @Field(() => FoodCreateInput, {nullable:false})
    data!: FoodCreateInput;
}
