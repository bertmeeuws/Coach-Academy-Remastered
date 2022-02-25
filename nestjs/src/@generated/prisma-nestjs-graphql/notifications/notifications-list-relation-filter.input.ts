import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationsWhereInput } from './notifications-where.input';

@InputType()
export class NotificationsListRelationFilter {

    @Field(() => NotificationsWhereInput, {nullable:true})
    every?: NotificationsWhereInput;

    @Field(() => NotificationsWhereInput, {nullable:true})
    some?: NotificationsWhereInput;

    @Field(() => NotificationsWhereInput, {nullable:true})
    none?: NotificationsWhereInput;
}
