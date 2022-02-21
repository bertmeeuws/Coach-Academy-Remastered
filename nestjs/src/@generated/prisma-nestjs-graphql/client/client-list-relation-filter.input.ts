import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';

@InputType()
export class ClientListRelationFilter {

    @Field(() => ClientWhereInput, {nullable:true})
    every?: ClientWhereInput;

    @Field(() => ClientWhereInput, {nullable:true})
    some?: ClientWhereInput;

    @Field(() => ClientWhereInput, {nullable:true})
    none?: ClientWhereInput;
}
