import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateManyCoachInput } from './client-create-many-coach.input';

@InputType()
export class ClientCreateManyCoachInputEnvelope {

    @Field(() => [ClientCreateManyCoachInput], {nullable:false})
    data!: Array<ClientCreateManyCoachInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
