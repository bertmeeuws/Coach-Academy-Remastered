import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanCreateWithoutCoachInput } from './dietplan-create-without-coach.input';

@InputType()
export class DietplanCreateOrConnectWithoutCoachInput {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;

    @Field(() => DietplanCreateWithoutCoachInput, {nullable:false})
    create!: DietplanCreateWithoutCoachInput;
}
