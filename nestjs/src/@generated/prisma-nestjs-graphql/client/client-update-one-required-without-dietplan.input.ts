import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutDietplanInput } from './client-create-without-dietplan.input';
import { ClientCreateOrConnectWithoutDietplanInput } from './client-create-or-connect-without-dietplan.input';
import { ClientUpsertWithoutDietplanInput } from './client-upsert-without-dietplan.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutDietplanInput } from './client-update-without-dietplan.input';

@InputType()
export class ClientUpdateOneRequiredWithoutDietplanInput {

    @Field(() => ClientCreateWithoutDietplanInput, {nullable:true})
    create?: ClientCreateWithoutDietplanInput;

    @Field(() => ClientCreateOrConnectWithoutDietplanInput, {nullable:true})
    connectOrCreate?: ClientCreateOrConnectWithoutDietplanInput;

    @Field(() => ClientUpsertWithoutDietplanInput, {nullable:true})
    upsert?: ClientUpsertWithoutDietplanInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    connect?: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutDietplanInput, {nullable:true})
    update?: ClientUpdateWithoutDietplanInput;
}
