import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachUpdateWithoutClientsInput } from './coach-update-without-clients.input';
import { CoachCreateWithoutClientsInput } from './coach-create-without-clients.input';

@InputType()
export class CoachUpsertWithoutClientsInput {

    @Field(() => CoachUpdateWithoutClientsInput, {nullable:false})
    update!: CoachUpdateWithoutClientsInput;

    @Field(() => CoachCreateWithoutClientsInput, {nullable:false})
    create!: CoachCreateWithoutClientsInput;
}
