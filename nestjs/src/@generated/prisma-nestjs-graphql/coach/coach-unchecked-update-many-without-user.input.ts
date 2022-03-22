import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';
import { CoachCreateOrConnectWithoutUserInput } from './coach-create-or-connect-without-user.input';
import { CoachUpsertWithWhereUniqueWithoutUserInput } from './coach-upsert-with-where-unique-without-user.input';
import { CoachCreateManyUserInputEnvelope } from './coach-create-many-user-input-envelope.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateWithWhereUniqueWithoutUserInput } from './coach-update-with-where-unique-without-user.input';
import { CoachUpdateManyWithWhereWithoutUserInput } from './coach-update-many-with-where-without-user.input';
import { CoachScalarWhereInput } from './coach-scalar-where.input';

@InputType()
export class CoachUncheckedUpdateManyWithoutUserInput {
  @Field(() => [CoachCreateWithoutUserInput], { nullable: true })
  create?: Array<CoachCreateWithoutUserInput>;

  @Field(() => [CoachCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: Array<CoachCreateOrConnectWithoutUserInput>;

  @Field(() => [CoachUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: Array<CoachUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => CoachCreateManyUserInputEnvelope, { nullable: true })
  createMany?: CoachCreateManyUserInputEnvelope;

  @Field(() => [CoachWhereUniqueInput], { nullable: true })
  set?: Array<CoachWhereUniqueInput>;

  @Field(() => [CoachWhereUniqueInput], { nullable: true })
  disconnect?: Array<CoachWhereUniqueInput>;

  @Field(() => [CoachWhereUniqueInput], { nullable: true })
  delete?: Array<CoachWhereUniqueInput>;

  @Field(() => [CoachWhereUniqueInput], { nullable: true })
  connect?: Array<CoachWhereUniqueInput>;

  @Field(() => [CoachUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: Array<CoachUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [CoachUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: Array<CoachUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [CoachScalarWhereInput], { nullable: true })
  deleteMany?: Array<CoachScalarWhereInput>;
}
