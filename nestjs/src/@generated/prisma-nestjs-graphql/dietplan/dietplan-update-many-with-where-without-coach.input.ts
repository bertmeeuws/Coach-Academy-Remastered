import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanScalarWhereInput } from './dietplan-scalar-where.input';
import { DietplanUpdateManyMutationInput } from './dietplan-update-many-mutation.input';

@InputType()
export class DietplanUpdateManyWithWhereWithoutCoachInput {

    @Field(() => DietplanScalarWhereInput, {nullable:false})
    where!: DietplanScalarWhereInput;

    @Field(() => DietplanUpdateManyMutationInput, {nullable:false})
    data!: DietplanUpdateManyMutationInput;
}
