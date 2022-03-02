import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanUpdateWithoutClientInput } from './dietplan-update-without-client.input';

@InputType()
export class DietplanUpdateWithWhereUniqueWithoutClientInput {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;

    @Field(() => DietplanUpdateWithoutClientInput, {nullable:false})
    data!: DietplanUpdateWithoutClientInput;
}
