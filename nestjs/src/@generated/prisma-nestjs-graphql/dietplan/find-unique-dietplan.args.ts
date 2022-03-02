import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';

@ArgsType()
export class FindUniqueDietplanArgs {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;
}
