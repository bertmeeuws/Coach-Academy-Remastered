import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkoutWhereInput } from './workout-where.input';

@InputType()
export class WorkoutListRelationFilter {

    @Field(() => WorkoutWhereInput, {nullable:true})
    every?: WorkoutWhereInput;

    @Field(() => WorkoutWhereInput, {nullable:true})
    some?: WorkoutWhereInput;

    @Field(() => WorkoutWhereInput, {nullable:true})
    none?: WorkoutWhereInput;
}
