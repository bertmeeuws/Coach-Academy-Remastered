import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Coach } from '../coach/coach.model';
import { Invite } from '../invite/invite.model';
import { Dietplan } from '../dietplan/dietplan.model';
import { Workout } from '../workout/workout.model';
import { ClientCount } from './client-count.output';

@ObjectType()
export class Client {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    dob!: Date | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Int, {nullable:true})
    number!: number | null;

    @Field(() => Int, {nullable:true})
    postal!: number | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => Coach, {nullable:true})
    coach?: Coach | null;

    @Field(() => Int, {nullable:true})
    coachId!: number | null;

    @Field(() => Invite, {nullable:true})
    invite?: Invite | null;

    @Field(() => String, {nullable:true})
    inviteId!: string | null;

    @Field(() => [Dietplan], {nullable:true})
    Dietplan?: Array<Dietplan>;

    @Field(() => [Workout], {nullable:true})
    Workout?: Array<Workout>;

    @Field(() => ClientCount, {nullable:false})
    _count?: ClientCount;
}
