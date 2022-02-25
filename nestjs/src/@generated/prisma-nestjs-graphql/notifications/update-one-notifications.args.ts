import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsUpdateInput } from './notifications-update.input';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';

@ArgsType()
export class UpdateOneNotificationsArgs {

    @Field(() => NotificationsUpdateInput, {nullable:false})
    data!: NotificationsUpdateInput;

    @Field(() => NotificationsWhereUniqueInput, {nullable:false})
    where!: NotificationsWhereUniqueInput;
}
