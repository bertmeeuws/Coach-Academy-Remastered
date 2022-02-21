import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachUpdateManyMutationInput } from './coach-update-many-mutation.input';
import { CoachWhereInput } from './coach-where.input';

@ArgsType()
export class UpdateManyCoachArgs {

    @Field(() => CoachUpdateManyMutationInput, {nullable:false})
    data!: CoachUpdateManyMutationInput;

    @Field(() => CoachWhereInput, {nullable:true})
    where?: CoachWhereInput;
}
