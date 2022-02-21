import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';

@InputType()
export class ClientRelationFilter {

    @Field(() => ClientWhereInput, {nullable:true})
    is?: ClientWhereInput;

    @Field(() => ClientWhereInput, {nullable:true})
    isNot?: ClientWhereInput;
}
