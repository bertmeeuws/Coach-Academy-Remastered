import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ClientListRelationFilter } from '../client/client-list-relation-filter.input';

@InputType()
export class CoachWhereInput {

    @Field(() => [CoachWhereInput], {nullable:true})
    AND?: Array<CoachWhereInput>;

    @Field(() => [CoachWhereInput], {nullable:true})
    OR?: Array<CoachWhereInput>;

    @Field(() => [CoachWhereInput], {nullable:true})
    NOT?: Array<CoachWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    surname?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ClientListRelationFilter, {nullable:true})
    clients?: ClientListRelationFilter;
}
