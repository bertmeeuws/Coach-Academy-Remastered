import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class DietplanScalarWhereWithAggregatesInput {

    @Field(() => [DietplanScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DietplanScalarWhereWithAggregatesInput>;

    @Field(() => [DietplanScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DietplanScalarWhereWithAggregatesInput>;

    @Field(() => [DietplanScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DietplanScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    coachId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    clientId?: IntWithAggregatesFilter;
}
