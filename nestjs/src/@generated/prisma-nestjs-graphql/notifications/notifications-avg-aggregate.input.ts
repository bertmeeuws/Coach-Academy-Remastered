import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotificationsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
