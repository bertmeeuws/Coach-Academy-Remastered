import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Coach } from '../coach/coach.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MealPlan {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Coach, { nullable: false })
  coach?: Coach;

  @Field(() => Int, { nullable: false })
  coachId!: number;
}
