import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsWhereInput } from './notifications-where.input';
import { NotificationsOrderByWithRelationInput } from './notifications-order-by-with-relation.input';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationsScalarFieldEnum } from './notifications-scalar-field.enum';

@ArgsType()
export class FindFirstNotificationsArgs {

    @Field(() => NotificationsWhereInput, {nullable:true})
    where?: NotificationsWhereInput;

    @Field(() => [NotificationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationsOrderByWithRelationInput>;

    @Field(() => NotificationsWhereUniqueInput, {nullable:true})
    cursor?: NotificationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NotificationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationsScalarFieldEnum>;
}
