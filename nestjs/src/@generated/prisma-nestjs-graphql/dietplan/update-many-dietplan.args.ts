import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanUpdateManyMutationInput } from './dietplan-update-many-mutation.input';
import { DietplanWhereInput } from './dietplan-where.input';

@ArgsType()
export class UpdateManyDietplanArgs {

    @Field(() => DietplanUpdateManyMutationInput, {nullable:false})
    data!: DietplanUpdateManyMutationInput;

    @Field(() => DietplanWhereInput, {nullable:true})
    where?: DietplanWhereInput;
}
