import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DietplanCreateManyInput } from './dietplan-create-many.input';

@ArgsType()
export class CreateManyDietplanArgs {

    @Field(() => [DietplanCreateManyInput], {nullable:false})
    data!: Array<DietplanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
