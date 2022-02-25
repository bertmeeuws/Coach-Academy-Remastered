import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';
import { NotificationsCreateInput } from './notifications-create.input';
import { NotificationsUpdateInput } from './notifications-update.input';

@ArgsType()
export class UpsertOneNotificationsArgs {

    @Field(() => NotificationsWhereUniqueInput, {nullable:false})
    where!: NotificationsWhereUniqueInput;

    @Field(() => NotificationsCreateInput, {nullable:false})
    create!: NotificationsCreateInput;

    @Field(() => NotificationsUpdateInput, {nullable:false})
    update!: NotificationsUpdateInput;
}
