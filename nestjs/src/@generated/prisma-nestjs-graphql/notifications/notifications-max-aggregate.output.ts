import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NOTIFICATION_TYPE } from '../prisma/notification-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NotificationsMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => NOTIFICATION_TYPE, {nullable:true})
    type?: keyof typeof NOTIFICATION_TYPE;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    read?: boolean;

    @Field(() => String, {nullable:true})
    content?: string;
}
