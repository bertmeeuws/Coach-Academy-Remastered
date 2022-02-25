import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsUpdateManyMutationInput } from './notifications-update-many-mutation.input';
import { NotificationsWhereInput } from './notifications-where.input';

@ArgsType()
export class UpdateManyNotificationsArgs {

    @Field(() => NotificationsUpdateManyMutationInput, {nullable:false})
    data!: NotificationsUpdateManyMutationInput;

    @Field(() => NotificationsWhereInput, {nullable:true})
    where?: NotificationsWhereInput;
}
