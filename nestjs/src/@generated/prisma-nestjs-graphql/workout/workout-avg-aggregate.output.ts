import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WorkoutAvgAggregate {

    @Field(() => Float, {nullable:true})
    coachId?: number;

    @Field(() => Float, {nullable:true})
    clientId?: number;
}
