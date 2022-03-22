import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachScalarWhereInput } from './coach-scalar-where.input';
import { CoachUpdateManyMutationInput } from './coach-update-many-mutation.input';

@InputType()
export class CoachUpdateManyWithWhereWithoutUserInput {
  @Field(() => CoachScalarWhereInput, { nullable: false })
  where!: CoachScalarWhereInput;

  @Field(() => CoachUpdateManyMutationInput, { nullable: false })
  data!: CoachUpdateManyMutationInput;
}
