import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class InviteAvgAggregate {

    @Field(() => Float, {nullable:true})
    coachId?: number;
}
