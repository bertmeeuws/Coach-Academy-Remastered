import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MealCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    dietplanId!: number;

    @Field(() => Int, {nullable:false})
    day!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
