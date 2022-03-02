import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutDietplanInput } from './coach-create-without-dietplan.input';
import { CoachCreateOrConnectWithoutDietplanInput } from './coach-create-or-connect-without-dietplan.input';
import { CoachUpsertWithoutDietplanInput } from './coach-upsert-without-dietplan.input';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateWithoutDietplanInput } from './coach-update-without-dietplan.input';

@InputType()
export class CoachUpdateOneRequiredWithoutDietplanInput {

    @Field(() => CoachCreateWithoutDietplanInput, {nullable:true})
    create?: CoachCreateWithoutDietplanInput;

    @Field(() => CoachCreateOrConnectWithoutDietplanInput, {nullable:true})
    connectOrCreate?: CoachCreateOrConnectWithoutDietplanInput;

    @Field(() => CoachUpsertWithoutDietplanInput, {nullable:true})
    upsert?: CoachUpsertWithoutDietplanInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    connect?: CoachWhereUniqueInput;

    @Field(() => CoachUpdateWithoutDietplanInput, {nullable:true})
    update?: CoachUpdateWithoutDietplanInput;
}
