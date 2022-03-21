import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from '../prisma/muscle-group.enum';

@InputType()
export class ExerciseCreateManysecondary_musclesInput {

    @Field(() => [MUSCLE_GROUP], {nullable:false})
    set!: Array<keyof typeof MUSCLE_GROUP>;
}
