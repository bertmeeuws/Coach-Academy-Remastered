import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanCreateInput } from './dietplan-create.input';
import { DietplanUpdateInput } from './dietplan-update.input';

@ArgsType()
export class UpsertOneDietplanArgs {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;

    @Field(() => DietplanCreateInput, {nullable:false})
    create!: DietplanCreateInput;

    @Field(() => DietplanUpdateInput, {nullable:false})
    update!: DietplanUpdateInput;
}
