import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutCoachInput } from './client-create-without-coach.input';
import { ClientCreateOrConnectWithoutCoachInput } from './client-create-or-connect-without-coach.input';
import { ClientCreateManyCoachInputEnvelope } from './client-create-many-coach-input-envelope.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientUncheckedCreateNestedManyWithoutCoachInput {

    @Field(() => [ClientCreateWithoutCoachInput], {nullable:true})
    create?: Array<ClientCreateWithoutCoachInput>;

    @Field(() => [ClientCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<ClientCreateOrConnectWithoutCoachInput>;

    @Field(() => ClientCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: ClientCreateManyCoachInputEnvelope;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    connect?: Array<ClientWhereUniqueInput>;
}
