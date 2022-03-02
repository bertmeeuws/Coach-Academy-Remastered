import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanUpdateInput } from './dietplan-update.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';

@ArgsType()
export class UpdateOneDietplanArgs {

    @Field(() => DietplanUpdateInput, {nullable:false})
    data!: DietplanUpdateInput;

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;
}
