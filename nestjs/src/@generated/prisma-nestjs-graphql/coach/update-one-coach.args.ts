import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachUpdateInput } from './coach-update.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@ArgsType()
export class UpdateOneCoachArgs {

    @Field(() => CoachUpdateInput, {nullable:false})
    data!: CoachUpdateInput;

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    where!: CoachWhereUniqueInput;
}
