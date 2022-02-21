import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientUpdateManyMutationInput } from './client-update-many-mutation.input';
import { ClientWhereInput } from './client-where.input';

@ArgsType()
export class UpdateManyClientArgs {

    @Field(() => ClientUpdateManyMutationInput, {nullable:false})
    data!: ClientUpdateManyMutationInput;

    @Field(() => ClientWhereInput, {nullable:true})
    where?: ClientWhereInput;
}
