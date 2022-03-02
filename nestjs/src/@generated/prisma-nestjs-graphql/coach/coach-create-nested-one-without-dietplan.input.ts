import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutDietplanInput } from './coach-create-without-dietplan.input';
import { CoachCreateOrConnectWithoutDietplanInput } from './coach-create-or-connect-without-dietplan.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachCreateNestedOneWithoutDietplanInput {

    @Field(() => CoachCreateWithoutDietplanInput, {nullable:true})
    create?: CoachCreateWithoutDietplanInput;

    @Field(() => CoachCreateOrConnectWithoutDietplanInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutDietplanInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;
}
