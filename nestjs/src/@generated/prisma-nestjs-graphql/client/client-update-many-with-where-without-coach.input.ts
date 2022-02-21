import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientScalarWhereInput } from './client-scalar-where.input';
import { ClientUpdateManyMutationInput } from './client-update-many-mutation.input';

@InputType()
export class ClientUpdateManyWithWhereWithoutCoachInput {

    @Field(() => ClientScalarWhereInput, {nullable:false})
    where!: ClientScalarWhereInput;

    @Field(() => ClientUpdateManyMutationInput, {nullable:false})
    data!: ClientUpdateManyMutationInput;
}
