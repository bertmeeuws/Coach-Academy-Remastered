import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InviteWhereInput } from './invite-where.input';
import { InviteOrderByWithRelationInput } from './invite-order-by-with-relation.input';
import { InviteWhereUniqueInput } from './invite-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InviteScalarFieldEnum } from './invite-scalar-field.enum';

@ArgsType()
export class FindManyInviteArgs {

    @Field(() => InviteWhereInput, {nullable:true})
    where?: InviteWhereInput;

    @Field(() => [InviteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InviteOrderByWithRelationInput>;

    @Field(() => InviteWhereUniqueInput, {nullable:true})
    cursor?: InviteWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InviteScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InviteScalarFieldEnum>;
}
