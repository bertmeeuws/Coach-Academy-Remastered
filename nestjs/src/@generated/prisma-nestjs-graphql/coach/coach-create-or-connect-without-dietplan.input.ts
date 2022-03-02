import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachCreateWithoutDietplanInput } from './coach-create-without-dietplan.input';

@InputType()
export class CoachCreateOrConnectWithoutDietplanInput {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    where!: CoachWhereUniqueInput;

    @Field(() => CoachCreateWithoutDietplanInput, {nullable:false})
    create!: CoachCreateWithoutDietplanInput;
}
