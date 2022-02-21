import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientCreateManyInput } from './client-create-many.input';

@ArgsType()
export class CreateManyClientArgs {

    @Field(() => [ClientCreateManyInput], {nullable:false})
    data!: Array<ClientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
