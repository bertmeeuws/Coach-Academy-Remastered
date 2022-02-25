import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Coach } from '../coach/coach.model';
import { Int } from '@nestjs/graphql';
import { Client } from '../client/client.model';

@ObjectType()
export class Invite {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Coach, {nullable:false})
    coach?: Coach;

    @Field(() => Int, {nullable:false})
    coachId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Client, {nullable:true})
    client?: Client | null;

    @Field(() => Date, {nullable:true})
    invalidated!: Date | null;
}
