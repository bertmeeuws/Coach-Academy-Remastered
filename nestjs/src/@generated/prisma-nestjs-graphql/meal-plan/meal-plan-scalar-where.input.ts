import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MealPlanScalarWhereInput {

    @Field(() => [MealPlanScalarWhereInput], {nullable:true})
    AND?: Array<MealPlanScalarWhereInput>;

    @Field(() => [MealPlanScalarWhereInput], {nullable:true})
    OR?: Array<MealPlanScalarWhereInput>;

    @Field(() => [MealPlanScalarWhereInput], {nullable:true})
    NOT?: Array<MealPlanScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    coachId?: IntFilter;
}
