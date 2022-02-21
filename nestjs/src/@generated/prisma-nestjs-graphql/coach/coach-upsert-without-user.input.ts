import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachUpdateWithoutUserInput } from './coach-update-without-user.input';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';

@InputType()
export class CoachUpsertWithoutUserInput {

    @Field(() => CoachUpdateWithoutUserInput, {nullable:false})
    update!: CoachUpdateWithoutUserInput;

    @Field(() => CoachCreateWithoutUserInput, {nullable:false})
    create!: CoachCreateWithoutUserInput;
}
