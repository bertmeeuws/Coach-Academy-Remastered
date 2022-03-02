import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealCreateWithoutDietplanInput } from './meal-create-without-dietplan.input';
import { MealCreateOrConnectWithoutDietplanInput } from './meal-create-or-connect-without-dietplan.input';
import { MealCreateManyDietplanInputEnvelope } from './meal-create-many-dietplan-input-envelope.input';
import { MealWhereUniqueInput } from './meal-where-unique.input';

@InputType()
export class MealCreateNestedManyWithoutDietplanInput {

    @Field(() => [MealCreateWithoutDietplanInput], {nullable:true})
    create?: Array<MealCreateWithoutDietplanInput>;

    @Field(() => [MealCreateOrConnectWithoutDietplanInput], {nullable:true})
    connectOrCreate?: Array<MealCreateOrConnectWithoutDietplanInput>;

    @Field(() => MealCreateManyDietplanInputEnvelope, {nullable:true})
    createMany?: MealCreateManyDietplanInputEnvelope;

    @Field(() => [MealWhereUniqueInput], {nullable:true})
    connect?: Array<MealWhereUniqueInput>;
}
