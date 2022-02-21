import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Client } from '../client/client.model';
import { CoachCount } from './coach-count.output';

@ObjectType()
export class Coach {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Client], {nullable:true})
    clients?: Array<Client>;

    @Field(() => CoachCount, {nullable:false})
    _count?: CoachCount;
}
