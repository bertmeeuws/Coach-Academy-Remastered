import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkoutWhereInput } from './workout-where.input';
import { WorkoutOrderByWithRelationInput } from './workout-order-by-with-relation.input';
import { WorkoutWhereUniqueInput } from './workout-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkoutScalarFieldEnum } from './workout-scalar-field.enum';

@ArgsType()
export class FindFirstWorkoutArgs {

    @Field(() => WorkoutWhereInput, {nullable:true})
    where?: WorkoutWhereInput;

    @Field(() => [WorkoutOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkoutOrderByWithRelationInput>;

    @Field(() => WorkoutWhereUniqueInput, {nullable:true})
    cursor?: WorkoutWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkoutScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkoutScalarFieldEnum>;
}
