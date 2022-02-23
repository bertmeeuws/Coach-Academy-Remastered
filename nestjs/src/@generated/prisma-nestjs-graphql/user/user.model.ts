import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Client } from '../client/client.model';
import { Coach } from '../coach/coach.model';
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

    @Field(() => String, {nullable:false,defaultValue:'client'})
    role!: string;

    @Field(() => [Client], {nullable:true})
    Client?: Array<Client>;

    @Field(() => [Coach], {nullable:true})
    Coach?: Array<Coach>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
