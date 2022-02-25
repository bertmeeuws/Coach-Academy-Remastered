import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsWhereUniqueInput } from './notifications-where-unique.input';

@ArgsType()
export class FindUniqueNotificationsArgs {

    @Field(() => NotificationsWhereUniqueInput, {nullable:false})
    where!: NotificationsWhereUniqueInput;
}
