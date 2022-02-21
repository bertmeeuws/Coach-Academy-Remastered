import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachCreateInput } from './coach-create.input';

@ArgsType()
export class CreateOneCoachArgs {

    @Field(() => CoachCreateInput, {nullable:false})
    data!: CoachCreateInput;
}
