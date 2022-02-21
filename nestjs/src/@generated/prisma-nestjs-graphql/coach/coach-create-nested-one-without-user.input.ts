import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';
import { CoachCreateOrConnectWithoutUserInput } from './coach-create-or-connect-without-user.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachCreateNestedOneWithoutUserInput {

    @Field(() => CoachCreateWithoutUserInput, {nullable:true})
    create?: CoachCreateWithoutUserInput;

    @Field(() => CoachCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;
}
