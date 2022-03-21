import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MUSCLE_GROUP } from './muscle-group.enum';

@InputType()
export class EnumMUSCLE_GROUPNullableListFilter {

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    equals?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => MUSCLE_GROUP, {nullable:true})
    has?: keyof typeof MUSCLE_GROUP;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    hasEvery?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => [MUSCLE_GROUP], {nullable:true})
    hasSome?: Array<keyof typeof MUSCLE_GROUP>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
