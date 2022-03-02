import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MEAL_DAY } from './meal-day.enum';

@InputType()
export class EnumMEAL_DAYFieldUpdateOperationsInput {

    @Field(() => MEAL_DAY, {nullable:true})
    set?: keyof typeof MEAL_DAY;
}
