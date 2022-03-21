import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class WorkoutScalarWhereWithAggregatesInput {

    @Field(() => [WorkoutScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [WorkoutScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkoutScalarWhereWithAggregatesInput>;

    @Field(() => [WorkoutScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkoutScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    day?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    coachId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    clientId?: IntWithAggregatesFilter;
}
