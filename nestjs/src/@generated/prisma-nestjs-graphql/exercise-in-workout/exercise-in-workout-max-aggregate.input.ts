import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExerciseInWorkoutMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    exerciseId?: true;

    @Field(() => Boolean, {nullable:true})
    workoutId?: true;
}
