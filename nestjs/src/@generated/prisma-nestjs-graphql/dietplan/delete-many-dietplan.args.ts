import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanWhereInput } from './dietplan-where.input';

@ArgsType()
export class DeleteManyDietplanArgs {

    @Field(() => DietplanWhereInput, {nullable:true})
    where?: DietplanWhereInput;
}
