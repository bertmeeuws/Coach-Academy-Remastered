import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MealPlanScalarWhereWithAggregatesInput {
  @Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<MealPlanScalarWhereWithAggregatesInput>;

  @Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<MealPlanScalarWhereWithAggregatesInput>;

  @Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<MealPlanScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  coachId?: IntWithAggregatesFilter;
}
