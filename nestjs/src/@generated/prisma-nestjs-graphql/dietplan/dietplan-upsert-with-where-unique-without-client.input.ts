import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanUpdateWithoutClientInput } from './dietplan-update-without-client.input';
import { DietplanCreateWithoutClientInput } from './dietplan-create-without-client.input';

@InputType()
export class DietplanUpsertWithWhereUniqueWithoutClientInput {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;

    @Field(() => DietplanUpdateWithoutClientInput, {nullable:false})
    update!: DietplanUpdateWithoutClientInput;

    @Field(() => DietplanCreateWithoutClientInput, {nullable:false})
    create!: DietplanCreateWithoutClientInput;
}
