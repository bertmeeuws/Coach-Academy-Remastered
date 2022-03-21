import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutCreateManyCoachInput } from './workout-create-many-coach.input';

@InputType()
export class WorkoutCreateManyCoachInputEnvelope {

    @Field(() => [WorkoutCreateManyCoachInput], {nullable:false})
    data!: Array<WorkoutCreateManyCoachInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
