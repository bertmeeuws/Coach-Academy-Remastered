import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutUserInput } from './client-update-without-user.input';

@InputType()
export class ClientUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;

  @Field(() => ClientUpdateWithoutUserInput, { nullable: false })
  data!: ClientUpdateWithoutUserInput;
}
