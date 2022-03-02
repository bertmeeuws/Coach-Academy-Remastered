import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanCreateWithoutCoachInput } from './dietplan-create-without-coach.input';
import { DietplanCreateOrConnectWithoutCoachInput } from './dietplan-create-or-connect-without-coach.input';
import { DietplanCreateManyCoachInputEnvelope } from './dietplan-create-many-coach-input-envelope.input';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';

@InputType()
export class DietplanCreateNestedManyWithoutCoachInput {

    @Field(() => [DietplanCreateWithoutCoachInput], {nullable:true})
    create?: Array<DietplanCreateWithoutCoachInput>;

    @Field(() => [DietplanCreateOrConnectWithoutCoachInput], {nullable:true})
    connectOrCreate?: Array<DietplanCreateOrConnectWithoutCoachInput>;

    @Field(() => DietplanCreateManyCoachInputEnvelope, {nullable:true})
    createMany?: DietplanCreateManyCoachInputEnvelope;

    @Field(() => [DietplanWhereUniqueInput], {nullable:true})
    connect?: Array<DietplanWhereUniqueInput>;
}
