import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from './muscle-group.enum';

@InputType()
export class ExerciseCreatesecondary_musclesInput {

    @Field(() => [MUSCLE_GROUP], {nullable:false})
    set!: Array<keyof typeof MUSCLE_GROUP>;
}
