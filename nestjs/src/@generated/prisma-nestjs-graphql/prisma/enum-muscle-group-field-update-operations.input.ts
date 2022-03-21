import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from './muscle-group.enum';

@InputType()
export class EnumMUSCLE_GROUPFieldUpdateOperationsInput {

    @Field(() => MUSCLE_GROUP, {nullable:true})
    set?: keyof typeof MUSCLE_GROUP;
}
