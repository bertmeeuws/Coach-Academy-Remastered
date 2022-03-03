import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MealPlanMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    coachId?: number;
}
