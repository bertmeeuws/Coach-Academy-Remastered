import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CoachScalarWhereWithAggregatesInput {

    @Field(() => [CoachScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CoachScalarWhereWithAggregatesInput>;

    @Field(() => [CoachScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CoachScalarWhereWithAggregatesInput>;

    @Field(() => [CoachScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CoachScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    surname?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
