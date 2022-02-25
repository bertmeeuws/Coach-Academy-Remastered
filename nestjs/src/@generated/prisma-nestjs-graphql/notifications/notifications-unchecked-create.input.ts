import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NOTIFICATION_TYPE } from '../prisma/notification-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class NotificationsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => NOTIFICATION_TYPE, {nullable:false})
    type!: keyof typeof NOTIFICATION_TYPE;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    read?: boolean;

    @Field(() => String, {nullable:true})
    content?: string;
}
