import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InviteAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;
}
