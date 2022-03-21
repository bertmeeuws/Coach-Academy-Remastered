import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from '../prisma/muscle-group.enum';

@ObjectType()
export class ExerciseMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => MUSCLE_GROUP, {nullable:true})
    primary_muscle?: keyof typeof MUSCLE_GROUP;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    video?: string;
}
