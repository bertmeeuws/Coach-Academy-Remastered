import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanCreateInput } from './dietplan-create.input';

@ArgsType()
export class CreateOneDietplanArgs {

    @Field(() => DietplanCreateInput, {nullable:false})
    data!: DietplanCreateInput;
}
