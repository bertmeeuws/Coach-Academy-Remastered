import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCreateManyInput } from './food-create-many.input';

@ArgsType()
export class CreateManyFoodArgs {

    @Field(() => [FoodCreateManyInput], {nullable:false})
    data!: Array<FoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
