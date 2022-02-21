import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutCoachInput } from './client-update-without-coach.input';

@InputType()
export class ClientUpdateWithWhereUniqueWithoutCoachInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutCoachInput, {nullable:false})
    data!: ClientUpdateWithoutCoachInput;
}
