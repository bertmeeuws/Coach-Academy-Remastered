import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteWhereInput } from './invite-where.input';

@InputType()
export class InviteListRelationFilter {

    @Field(() => InviteWhereInput, {nullable:true})
    every?: InviteWhereInput;

    @Field(() => InviteWhereInput, {nullable:true})
    some?: InviteWhereInput;

    @Field(() => InviteWhereInput, {nullable:true})
    none?: InviteWhereInput;
}
