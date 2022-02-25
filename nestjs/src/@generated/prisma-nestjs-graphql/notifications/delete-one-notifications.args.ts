import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';

@ArgsType()
export class DeleteOneNotificationsArgs {

    @Field(() => NotificationsWhereUniqueInput, {nullable:false})
    where!: NotificationsWhereUniqueInput;
}
