import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanCreateWithoutClientInput } from './dietplan-create-without-client.input';

@InputType()
export class DietplanCreateOrConnectWithoutClientInput {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;

    @Field(() => DietplanCreateWithoutClientInput, {nullable:false})
    create!: DietplanCreateWithoutClientInput;
}
