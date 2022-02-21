import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachCreateManyInput } from './coach-create-many.input';

@ArgsType()
export class CreateManyCoachArgs {

    @Field(() => [CoachCreateManyInput], {nullable:false})
    data!: Array<CoachCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
