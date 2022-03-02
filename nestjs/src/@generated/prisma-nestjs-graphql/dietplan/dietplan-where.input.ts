import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CoachRelationFilter } from '../coach/coach-relation-filter.input';
import { ClientRelationFilter } from '../client/client-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { MealListRelationFilter } from '../meal/meal-list-relation-filter.input';

@InputType()
export class DietplanWhereInput {

    @Field(() => [DietplanWhereInput], {nullable:true})
    AND?: Array<DietplanWhereInput>;

    @Field(() => [DietplanWhereInput], {nullable:true})
    OR?: Array<DietplanWhereInput>;

    @Field(() => [DietplanWhereInput], {nullable:true})
    NOT?: Array<DietplanWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => CoachRelationFilter, {nullable:true})
    coach?: CoachRelationFilter;

    @Field(() => ClientRelationFilter, {nullable:true})
    client?: ClientRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    coachId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;

    @Field(() => MealListRelationFilter, {nullable:true})
    Meal?: MealListRelationFilter;
}
