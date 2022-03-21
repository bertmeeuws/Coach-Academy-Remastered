import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateManyClientInput } from './workout-create-many-client.input';

@InputType()
export class WorkoutCreateManyClientInputEnvelope {

    @Field(() => [WorkoutCreateManyClientInput], {nullable:false})
    data!: Array<WorkoutCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
