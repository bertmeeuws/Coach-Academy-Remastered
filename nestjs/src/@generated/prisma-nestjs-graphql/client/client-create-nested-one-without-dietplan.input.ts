import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutDietplanInput } from './client-create-without-dietplan.input';
import { ClientCreateOrConnectWithoutDietplanInput } from './client-create-or-connect-without-dietplan.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientCreateNestedOneWithoutDietplanInput {

    @Field(() => ClientCreateWithoutDietplanInput, {nullable:true})
    create?: ClientCreateWithoutDietplanInput;

    @Field(() => ClientCreateOrConnectWithoutDietplanInput, {nullable:true})
    connectOrCreate?: ClientCreateOrConnectWithoutDietplanInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    connect?: ClientWhereUniqueInput;
}
