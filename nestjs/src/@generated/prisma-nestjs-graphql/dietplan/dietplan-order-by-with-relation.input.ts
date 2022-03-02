import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CoachOrderByWithRelationInput } from '../coach/coach-order-by-with-relation.input';
import { ClientOrderByWithRelationInput } from '../client/client-order-by-with-relation.input';
import { MealOrderByRelationAggregateInput } from '../meal/meal-order-by-relation-aggregate.input';

@InputType()
export class DietplanOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => CoachOrderByWithRelationInput, {nullable:true})
    coach?: CoachOrderByWithRelationInput;

    @Field(() => ClientOrderByWithRelationInput, {nullable:true})
    client?: ClientOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    coachId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => MealOrderByRelationAggregateInput, {nullable:true})
    Meal?: MealOrderByRelationAggregateInput;
}
