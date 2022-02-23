import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';
import { CoachCreateOrConnectWithoutUserInput } from './coach-create-or-connect-without-user.input';
import { CoachCreateManyUserInputEnvelope } from './coach-create-many-user-input-envelope.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CoachCreateWithoutUserInput], {nullable:true})
    create?: Array<CoachCreateWithoutUserInput>;

    @Field(() => [CoachCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CoachCreateOrConnectWithoutUserInput>;

    @Field(() => CoachCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CoachCreateManyUserInputEnvelope;

    @Field(() => [CoachWhereUniqueInput], {nullable:true})
    connect?: Array<CoachWhereUniqueInput>;
}
