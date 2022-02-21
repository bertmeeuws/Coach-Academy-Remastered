import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutClientsInput } from './coach-create-without-clients.input';
import { CoachCreateOrConnectWithoutClientsInput } from './coach-create-or-connect-without-clients.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachCreateNestedOneWithoutClientsInput {

    @Field(() => CoachCreateWithoutClientsInput, {nullable:true})
    create?: CoachCreateWithoutClientsInput;

    @Field(() => CoachCreateOrConnectWithoutClientsInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutClientsInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;
}
