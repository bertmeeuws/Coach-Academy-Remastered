import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';

@ArgsType()
export class DeleteManyClientArgs {

    @Field(() => ClientWhereInput, {nullable:true})
    where?: ClientWhereInput;
}
