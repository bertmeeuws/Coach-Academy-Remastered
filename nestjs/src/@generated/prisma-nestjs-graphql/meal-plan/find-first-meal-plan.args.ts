import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanWhereInput } from './meal-plan-where.input';
import { MealPlanOrderByWithRelationInput } from './meal-plan-order-by-with-relation.input';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MealPlanScalarFieldEnum } from './meal-plan-scalar-field.enum';

@ArgsType()
export class FindFirstMealPlanArgs {

    @Field(() => MealPlanWhereInput, {nullable:true})
    where?: MealPlanWhereInput;

    @Field(() => [MealPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MealPlanOrderByWithRelationInput>;

    @Field(() => MealPlanWhereUniqueInput, {nullable:true})
    cursor?: MealPlanWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MealPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MealPlanScalarFieldEnum>;
}
