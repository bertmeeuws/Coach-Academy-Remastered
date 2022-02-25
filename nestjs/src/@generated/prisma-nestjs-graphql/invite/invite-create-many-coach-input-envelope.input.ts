import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InviteCreateManyCoachInput } from './invite-create-many-coach.input';

@InputType()
export class InviteCreateManyCoachInputEnvelope {

    @Field(() => [InviteCreateManyCoachInput], {nullable:false})
    data!: Array<InviteCreateManyCoachInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
