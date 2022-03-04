import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@ArgsType()
export class FindUniqueClientArgs {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;
}