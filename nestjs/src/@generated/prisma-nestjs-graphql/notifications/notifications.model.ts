import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NOTIFICATION_TYPE } from '../prisma/notification-type.enum';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Notifications {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => NOTIFICATION_TYPE, {nullable:false})
    type!: keyof typeof NOTIFICATION_TYPE;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    read!: boolean;

    @Field(() => String, {nullable:true})
    content!: string | null;
}
