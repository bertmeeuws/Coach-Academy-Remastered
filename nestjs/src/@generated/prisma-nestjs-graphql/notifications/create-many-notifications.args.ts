import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationsCreateManyInput } from './notifications-create-many.input';

@ArgsType()
export class CreateManyNotificationsArgs {

    @Field(() => [NotificationsCreateManyInput], {nullable:false})
    data!: Array<NotificationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
