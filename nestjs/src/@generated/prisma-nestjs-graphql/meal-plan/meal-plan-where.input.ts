import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CoachRelationFilter } from '../coach/coach-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MealPlanWhereInput {
  @Field(() => [MealPlanWhereInput], { nullable: true })
  AND?: Array<MealPlanWhereInput>;

  @Field(() => [MealPlanWhereInput], { nullable: true })
  OR?: Array<MealPlanWhereInput>;

  @Field(() => [MealPlanWhereInput], { nullable: true })
  NOT?: Array<MealPlanWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => CoachRelationFilter, { nullable: true })
  coach?: CoachRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  coachId?: IntFilter;
}
