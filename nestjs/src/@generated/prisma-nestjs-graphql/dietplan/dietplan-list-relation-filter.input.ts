import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereInput } from './dietplan-where.input';

@InputType()
export class DietplanListRelationFilter {

    @Field(() => DietplanWhereInput, {nullable:true})
    every?: DietplanWhereInput;

    @Field(() => DietplanWhereInput, {nullable:true})
    some?: DietplanWhereInput;

    @Field(() => DietplanWhereInput, {nullable:true})
    none?: DietplanWhereInput;
}
