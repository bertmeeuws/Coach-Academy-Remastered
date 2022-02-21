import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachCreateInput } from './coach-create.input';
import { CoachUpdateInput } from './coach-update.input';

@ArgsType()
export class UpsertOneCoachArgs {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    where!: CoachWhereUniqueInput;

    @Field(() => CoachCreateInput, {nullable:false})
    create!: CoachCreateInput;

    @Field(() => CoachUpdateInput, {nullable:false})
    update!: CoachUpdateInput;
}
