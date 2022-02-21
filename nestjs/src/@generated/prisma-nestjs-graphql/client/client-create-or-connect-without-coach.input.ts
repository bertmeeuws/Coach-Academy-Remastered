import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientCreateWithoutCoachInput } from './client-create-without-coach.input';

@InputType()
export class ClientCreateOrConnectWithoutCoachInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateWithoutCoachInput, {nullable:false})
    create!: ClientCreateWithoutCoachInput;
}
