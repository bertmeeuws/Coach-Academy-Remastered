import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ClientCount {

    @Field(() => Int, {nullable:false})
    Dietplan?: number;
}
