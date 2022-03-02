import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class DietplanScalarWhereInput {

    @Field(() => [DietplanScalarWhereInput], {nullable:true})
    AND?: Array<DietplanScalarWhereInput>;

    @Field(() => [DietplanScalarWhereInput], {nullable:true})
    OR?: Array<DietplanScalarWhereInput>;

    @Field(() => [DietplanScalarWhereInput], {nullable:true})
    NOT?: Array<DietplanScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    coachId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;
}
