import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DietplanAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    coachId?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;
}