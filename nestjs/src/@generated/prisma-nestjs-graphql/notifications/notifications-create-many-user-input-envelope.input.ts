import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationsCreateManyUserInput } from './notifications-create-many-user.input';

@InputType()
export class NotificationsCreateManyUserInputEnvelope {

    @Field(() => [NotificationsCreateManyUserInput], {nullable:false})
    data!: Array<NotificationsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
