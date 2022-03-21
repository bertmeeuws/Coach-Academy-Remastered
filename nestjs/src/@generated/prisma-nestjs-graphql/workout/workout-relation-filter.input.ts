import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereInput } from './workout-where.input';

@InputType()
export class WorkoutRelationFilter {

    @Field(() => WorkoutWhereInput, {nullable:true})
    is?: WorkoutWhereInput;

    @Field(() => WorkoutWhereInput, {nullable:true})
    isNot?: WorkoutWhereInput;
}
