import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutCoachInput } from './client-update-without-coach.input';
import { ClientCreateWithoutCoachInput } from './client-create-without-coach.input';

@InputType()
export class ClientUpsertWithWhereUniqueWithoutCoachInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    where!: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutCoachInput, {nullable:false})
    update!: ClientUpdateWithoutCoachInput;

    @Field(() => ClientCreateWithoutCoachInput, {nullable:false})
    create!: ClientCreateWithoutCoachInput;
}
