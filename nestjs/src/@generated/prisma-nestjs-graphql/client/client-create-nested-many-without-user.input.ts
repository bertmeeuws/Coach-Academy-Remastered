import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';
import { ClientCreateOrConnectWithoutUserInput } from './client-create-or-connect-without-user.input';
import { ClientCreateManyUserInputEnvelope } from './client-create-many-user-input-envelope.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientCreateNestedManyWithoutUserInput {
  @Field(() => [ClientCreateWithoutUserInput], { nullable: true })
  create?: Array<ClientCreateWithoutUserInput>;

  @Field(() => [ClientCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: Array<ClientCreateOrConnectWithoutUserInput>;

  @Field(() => ClientCreateManyUserInputEnvelope, { nullable: true })
  createMany?: ClientCreateManyUserInputEnvelope;

  @Field(() => [ClientWhereUniqueInput], { nullable: true })
  connect?: Array<ClientWhereUniqueInput>;
}
