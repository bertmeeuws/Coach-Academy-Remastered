import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateWithoutUserInput } from './coach-update-without-user.input';

@InputType()
export class CoachUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => CoachWhereUniqueInput, { nullable: false })
  where!: CoachWhereUniqueInput;

  @Field(() => CoachUpdateWithoutUserInput, { nullable: false })
  data!: CoachUpdateWithoutUserInput;
}
