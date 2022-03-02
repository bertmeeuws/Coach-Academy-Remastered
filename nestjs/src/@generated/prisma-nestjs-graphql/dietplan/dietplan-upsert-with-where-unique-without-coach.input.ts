import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanUpdateWithoutCoachInput } from './dietplan-update-without-coach.input';
import { DietplanCreateWithoutCoachInput } from './dietplan-create-without-coach.input';

@InputType()
export class DietplanUpsertWithWhereUniqueWithoutCoachInput {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;

    @Field(() => DietplanUpdateWithoutCoachInput, {nullable:false})
    update!: DietplanUpdateWithoutCoachInput;

    @Field(() => DietplanCreateWithoutCoachInput, {nullable:false})
    create!: DietplanCreateWithoutCoachInput;
}
