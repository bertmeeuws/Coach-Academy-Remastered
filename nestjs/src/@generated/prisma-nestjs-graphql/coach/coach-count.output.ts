import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CoachCount {

    @Field(() => Int, {nullable:false})
    clients?: number;
}
