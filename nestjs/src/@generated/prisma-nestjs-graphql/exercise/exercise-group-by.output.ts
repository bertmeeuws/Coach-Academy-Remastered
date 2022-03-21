import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from '../prisma/muscle-group.enum';
import { ExerciseCountAggregate } from './exercise-count-aggregate.output';
import { ExerciseMinAggregate } from './exercise-min-aggregate.output';
import { ExerciseMaxAggregate } from './exercise-max-aggregate.output';

@ObjectType()
export class ExerciseGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => MUSCLE_GROUP, {nullable:false})
    primary_muscle!: keyof typeof MUSCLE_GROUP;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    video?: string;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    secondary_muscles?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => ExerciseCountAggregate, {nullable:true})
    _count?: ExerciseCountAggregate;

    @Field(() => ExerciseMinAggregate, {nullable:true})
    _min?: ExerciseMinAggregate;

    @Field(() => ExerciseMaxAggregate, {nullable:true})
    _max?: ExerciseMaxAggregate;
}
