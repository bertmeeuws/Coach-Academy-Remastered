import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExerciseWhereInput } from './exercise-where.input';

@InputType()
export class ExerciseRelationFilter {

    @Field(() => ExerciseWhereInput, {nullable:true})
    is?: ExerciseWhereInput;

    @Field(() => ExerciseWhereInput, {nullable:true})
    isNot?: ExerciseWhereInput;
}
