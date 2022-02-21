import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachCreateWithoutClientsInput } from './coach-create-without-clients.input';

@InputType()
export class CoachCreateOrConnectWithoutClientsInput {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    where!: CoachWhereUniqueInput;

    @Field(() => CoachCreateWithoutClientsInput, {nullable:false})
    create!: CoachCreateWithoutClientsInput;
}
