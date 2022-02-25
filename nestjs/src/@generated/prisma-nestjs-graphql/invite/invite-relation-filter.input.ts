import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteWhereInput } from './invite-where.input';

@InputType()
export class InviteRelationFilter {

    @Field(() => InviteWhereInput, {nullable:true})
    is?: InviteWhereInput;

    @Field(() => InviteWhereInput, {nullable:true})
    isNot?: InviteWhereInput;
}
