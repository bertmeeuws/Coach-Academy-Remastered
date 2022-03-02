import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealCreateManyDietplanInput } from './meal-create-many-dietplan.input';

@InputType()
export class MealCreateManyDietplanInputEnvelope {

    @Field(() => [MealCreateManyDietplanInput], {nullable:false})
    data!: Array<MealCreateManyDietplanInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
