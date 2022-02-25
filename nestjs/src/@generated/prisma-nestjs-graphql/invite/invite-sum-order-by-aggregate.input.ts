import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InviteSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;
}
