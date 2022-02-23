import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateManyUserInput } from './coach-create-many-user.input';

@InputType()
export class CoachCreateManyUserInputEnvelope {

    @Field(() => [CoachCreateManyUserInput], {nullable:false})
    data!: Array<CoachCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
