import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateNestedManyWithoutCoachInput } from '../client/client-create-nested-many-without-coach.input';

@InputType()
export class CoachCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ClientCreateNestedManyWithoutCoachInput, {nullable:true})
    clients?: ClientCreateNestedManyWithoutCoachInput;
}
