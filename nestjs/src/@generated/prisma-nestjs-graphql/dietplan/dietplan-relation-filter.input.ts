import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereInput } from './dietplan-where.input';

@InputType()
export class DietplanRelationFilter {

    @Field(() => DietplanWhereInput, {nullable:true})
    is?: DietplanWhereInput;

    @Field(() => DietplanWhereInput, {nullable:true})
    isNot?: DietplanWhereInput;
}
