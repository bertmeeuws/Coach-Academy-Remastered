import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NOTIFICATION_TYPE } from './notification-type.enum';

@InputType()
export class EnumNOTIFICATION_TYPEFieldUpdateOperationsInput {

    @Field(() => NOTIFICATION_TYPE, {nullable:true})
    set?: keyof typeof NOTIFICATION_TYPE;
}
