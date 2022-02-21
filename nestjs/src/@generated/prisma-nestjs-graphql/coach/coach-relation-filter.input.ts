import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';

@InputType()
export class CoachRelationFilter {

    @Field(() => CoachWhereInput, {nullable:true})
    is?: CoachWhereInput;

    @Field(() => CoachWhereInput, {nullable:true})
    isNot?: CoachWhereInput;
}
