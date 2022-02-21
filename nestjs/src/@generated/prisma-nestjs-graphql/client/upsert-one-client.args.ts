import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientCreateInput } from './client-create.input';
import { ClientUpdateInput } from './client-update.input';

@ArgsType()
export class UpsertOneClientArgs {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateInput, {nullable:false})
    create!: ClientCreateInput;

    @Field(() => ClientUpdateInput, {nullable:false})
    update!: ClientUpdateInput;
}
