import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateManyUserInput } from './client-create-many-user.input';

@InputType()
export class ClientCreateManyUserInputEnvelope {

    @Field(() => [ClientCreateManyUserInput], {nullable:false})
    data!: Array<ClientCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
