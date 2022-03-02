import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanWhereInput } from './dietplan-where.input';
import { DietplanOrderByWithRelationInput } from './dietplan-order-by-with-relation.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DietplanScalarFieldEnum } from './dietplan-scalar-field.enum';

@ArgsType()
export class FindFirstDietplanArgs {

    @Field(() => DietplanWhereInput, {nullable:true})
    where?: DietplanWhereInput;

    @Field(() => [DietplanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DietplanOrderByWithRelationInput>;

    @Field(() => DietplanWhereUniqueInput, {nullable:true})
    cursor?: DietplanWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DietplanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DietplanScalarFieldEnum>;
}
