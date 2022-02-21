import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutClientsInput } from './coach-create-without-clients.input';
import { CoachCreateOrConnectWithoutClientsInput } from './coach-create-or-connect-without-clients.input';
import { CoachUpsertWithoutClientsInput } from './coach-upsert-without-clients.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateWithoutClientsInput } from './coach-update-without-clients.input';

@InputType()
export class CoachUpdateOneWithoutClientsInput {

    @Field(() => CoachCreateWithoutClientsInput, {nullable:true})
    create?: CoachCreateWithoutClientsInput;

    @Field(() => CoachCreateOrConnectWithoutClientsInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutClientsInput;

    @Field(() => CoachUpsertWithoutClientsInput, {nullable:true})
    upsert?: CoachUpsertWithoutClientsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;

    @Field(() => CoachUpdateWithoutClientsInput, {nullable:true})
    update?: CoachUpdateWithoutClientsInput;
}
