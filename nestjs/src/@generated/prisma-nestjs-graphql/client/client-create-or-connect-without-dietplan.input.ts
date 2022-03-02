import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientCreateWithoutDietplanInput } from './client-create-without-dietplan.input';

@InputType()
export class ClientCreateOrConnectWithoutDietplanInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateWithoutDietplanInput, {nullable:false})
    create!: ClientCreateWithoutDietplanInput;
}
