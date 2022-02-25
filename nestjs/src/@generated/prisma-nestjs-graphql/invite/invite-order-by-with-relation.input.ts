import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CoachOrderByWithRelationInput } from '../coach/coach-order-by-with-relation.input';
import { ClientOrderByWithRelationInput } from '../client/client-order-by-with-relation.input';

@InputType()
export class InviteOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => CoachOrderByWithRelationInput, {nullable:true})
    coach?: CoachOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ClientOrderByWithRelationInput, {nullable:true})
    client?: ClientOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    invalidated?: keyof typeof SortOrder;
}
