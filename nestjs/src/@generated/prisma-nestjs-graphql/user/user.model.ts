import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Client } from '../client/client.model';
import { Coach } from '../coach/coach.model';
import { Notifications } from '../notifications/notifications.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false,defaultValue:'CLIENT'})
    role!: string;

    @Field(() => Client, {nullable:true})
    client?: Client | null;

    @Field(() => Coach, {nullable:true})
    coach?: Coach | null;

    @Field(() => [Notifications], {nullable:true})
    Notifications?: Array<Notifications>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
