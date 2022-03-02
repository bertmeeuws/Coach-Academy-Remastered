import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Coach } from '../coach/coach.model';
import { Client } from '../client/client.model';
import { Int } from '@nestjs/graphql';
import { Meal } from '../meal/meal.model';
import { DietplanCount } from './dietplan-count.output';

@ObjectType()
export class Dietplan {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Coach, {nullable:false})
    coach?: Coach;

    @Field(() => Client, {nullable:false})
    client?: Client;

    @Field(() => Int, {nullable:false})
    coachId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => [Meal], {nullable:true})
    Meal?: Array<Meal>;

    @Field(() => DietplanCount, {nullable:false})
    _count?: DietplanCount;
}
