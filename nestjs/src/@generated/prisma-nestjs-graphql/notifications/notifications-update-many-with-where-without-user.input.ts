import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationsScalarWhereInput } from './notifications-scalar-where.input';
import { NotificationsUpdateManyMutationInput } from './notifications-update-many-mutation.input';

@InputType()
export class NotificationsUpdateManyWithWhereWithoutUserInput {

    @Field(() => NotificationsScalarWhereInput, {nullable:false})
    where!: NotificationsScalarWhereInput;

    @Field(() => NotificationsUpdateManyMutationInput, {nullable:false})
    data!: NotificationsUpdateManyMutationInput;
}
