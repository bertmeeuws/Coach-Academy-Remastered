import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NOTIFICATION_TYPE } from '../prisma/notification-type.enum';

@InputType()
export class NotificationsCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => NOTIFICATION_TYPE, {nullable:false})
    type!: keyof typeof NOTIFICATION_TYPE;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    read?: boolean;

    @Field(() => String, {nullable:true})
    content?: string;
}
