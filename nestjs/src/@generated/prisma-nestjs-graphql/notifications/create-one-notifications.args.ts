import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsCreateInput } from './notifications-create.input';

@ArgsType()
export class CreateOneNotificationsArgs {

    @Field(() => NotificationsCreateInput, {nullable:false})
    data!: NotificationsCreateInput;
}
