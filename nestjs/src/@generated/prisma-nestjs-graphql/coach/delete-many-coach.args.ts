import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';

@ArgsType()
export class DeleteManyCoachArgs {

    @Field(() => CoachWhereInput, {nullable:true})
    where?: CoachWhereInput;
}
