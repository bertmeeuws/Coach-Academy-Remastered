import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class WorkoutScalarWhereInput {

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    AND?: Array<WorkoutScalarWhereInput>;

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    OR?: Array<WorkoutScalarWhereInput>;

    @Field(() => [WorkoutScalarWhereInput], {nullable:true})
    NOT?: Array<WorkoutScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    day?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    coachId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;
}
