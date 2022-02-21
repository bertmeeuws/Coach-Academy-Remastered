import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';

@InputType()
export class CoachCreateOrConnectWithoutUserInput {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    where!: CoachWhereUniqueInput;

    @Field(() => CoachCreateWithoutUserInput, {nullable:false})
    create!: CoachCreateWithoutUserInput;
}
