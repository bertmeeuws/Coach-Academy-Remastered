import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from './muscle-group.enum';

@InputType()
export class ExerciseUpdatesecondary_musclesInput {

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    set?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    push?: Array<keyof typeof MUSCLE_GROUP>;
}
