import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientCreateInput } from './client-create.input';

@ArgsType()
export class CreateOneClientArgs {

    @Field(() => ClientCreateInput, {nullable:false})
    data!: ClientCreateInput;
}
