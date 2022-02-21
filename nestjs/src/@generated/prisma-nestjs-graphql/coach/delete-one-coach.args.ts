import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@ArgsType()
export class DeleteOneCoachArgs {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    where!: CoachWhereUniqueInput;
}
