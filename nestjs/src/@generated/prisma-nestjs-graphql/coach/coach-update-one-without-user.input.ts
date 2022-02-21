import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';
import { CoachCreateOrConnectWithoutUserInput } from './coach-create-or-connect-without-user.input';
import { CoachUpsertWithoutUserInput } from './coach-upsert-without-user.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateWithoutUserInput } from './coach-update-without-user.input';

@InputType()
export class CoachUpdateOneWithoutUserInput {

    @Field(() => CoachCreateWithoutUserInput, {nullable:true})
    create?: CoachCreateWithoutUserInput;

    @Field(() => CoachCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput;

    @Field(() => CoachUpsertWithoutUserInput, {nullable:true})
    upsert?: CoachUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;

    @Field(() => CoachUpdateWithoutUserInput, {nullable:true})
    update?: CoachUpdateWithoutUserInput;
}
