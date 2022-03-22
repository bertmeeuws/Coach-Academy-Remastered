import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CoachOrderByWithRelationInput } from '../coach/coach-order-by-with-relation.input';

@InputType()
export class MealPlanOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => CoachOrderByWithRelationInput, { nullable: true })
  coach?: CoachOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  coachId?: keyof typeof SortOrder;
}
