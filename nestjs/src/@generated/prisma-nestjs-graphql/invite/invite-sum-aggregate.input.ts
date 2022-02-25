import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InviteSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    coachId?: true;
}
