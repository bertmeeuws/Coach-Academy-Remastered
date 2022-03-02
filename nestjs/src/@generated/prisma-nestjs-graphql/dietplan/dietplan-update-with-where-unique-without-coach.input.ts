import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanWhereUniqueInput } from './dietplan-where-unique.input';
import { DietplanUpdateWithoutCoachInput } from './dietplan-update-without-coach.input';

@InputType()
export class DietplanUpdateWithWhereUniqueWithoutCoachInput {

    @Field(() => DietplanWhereUniqueInput, {nullable:false})
    where!: DietplanWhereUniqueInput;

    @Field(() => DietplanUpdateWithoutCoachInput, {nullable:false})
    data!: DietplanUpdateWithoutCoachInput;
}
