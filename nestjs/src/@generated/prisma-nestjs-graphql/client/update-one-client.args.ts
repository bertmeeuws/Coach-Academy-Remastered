import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientUpdateInput } from './client-update.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@ArgsType()
export class UpdateOneClientArgs {

    @Field(() => ClientUpdateInput, {nullable:false})
    data!: ClientUpdateInput;

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;
}
