import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsWhereInput } from './notifications-where.input';

@ArgsType()
export class DeleteManyNotificationsArgs {

    @Field(() => NotificationsWhereInput, {nullable:true})
    where?: NotificationsWhereInput;
}
