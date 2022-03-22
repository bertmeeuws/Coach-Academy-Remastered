import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';

@InputType()
export class CoachListRelationFilter {
  @Field(() => CoachWhereInput, { nullable: true })
  every?: CoachWhereInput;

  @Field(() => CoachWhereInput, { nullable: true })
  some?: CoachWhereInput;

  @Field(() => CoachWhereInput, { nullable: true })
  none?: CoachWhereInput;
}
