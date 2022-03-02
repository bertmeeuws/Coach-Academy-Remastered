import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachUpdateWithoutDietplanInput } from './coach-update-without-dietplan.input';
import { CoachCreateWithoutDietplanInput } from './coach-create-without-dietplan.input';

@InputType()
export class CoachUpsertWithoutDietplanInput {

    @Field(() => CoachUpdateWithoutDietplanInput, {nullable:false})
    update!: CoachUpdateWithoutDietplanInput;

    @Field(() => CoachCreateWithoutDietplanInput, {nullable:false})
    create!: CoachCreateWithoutDietplanInput;
}
