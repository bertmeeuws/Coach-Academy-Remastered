import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealWhereInput } from './meal-where.input';
import { MealOrderByWithRelationInput } from './meal-order-by-with-relation.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MealScalarFieldEnum } from './meal-scalar-field.enum';

@ArgsType()
export class FindFirstMealArgs {

    @Field(() => MealWhereInput, {nullable:true})
    where?: MealWhereInput;

    @Field(() => [MealOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MealOrderByWithRelationInput>;

    @Field(() => MealWhereUniqueInput, {nullable:true})
    cursor?: MealWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MealScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MealScalarFieldEnum>;
}
