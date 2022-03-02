import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanCreateManyClientInput } from './dietplan-create-many-client.input';

@InputType()
export class DietplanCreateManyClientInputEnvelope {

    @Field(() => [DietplanCreateManyClientInput], {nullable:false})
    data!: Array<DietplanCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
