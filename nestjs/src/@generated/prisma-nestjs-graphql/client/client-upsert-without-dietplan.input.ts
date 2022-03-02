import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUpdateWithoutDietplanInput } from './client-update-without-dietplan.input';
import { ClientCreateWithoutDietplanInput } from './client-create-without-dietplan.input';

@InputType()
export class ClientUpsertWithoutDietplanInput {

    @Field(() => ClientUpdateWithoutDietplanInput, {nullable:false})
    update!: ClientUpdateWithoutDietplanInput;

    @Field(() => ClientCreateWithoutDietplanInput, {nullable:false})
    create!: ClientCreateWithoutDietplanInput;
}
