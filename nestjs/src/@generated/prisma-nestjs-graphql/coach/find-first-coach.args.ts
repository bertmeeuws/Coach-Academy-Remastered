import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';
import { CoachOrderByWithRelationInput } from './coach-order-by-with-relation.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CoachScalarFieldEnum } from './coach-scalar-field.enum';

@ArgsType()
export class FindFirstCoachArgs {

    @Field(() => CoachWhereInput, {nullable:true})
    where?: CoachWhereInput;

    @Field(() => [CoachOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CoachOrderByWithRelationInput>;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    cursor?: CoachWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CoachScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CoachScalarFieldEnum>;
}
