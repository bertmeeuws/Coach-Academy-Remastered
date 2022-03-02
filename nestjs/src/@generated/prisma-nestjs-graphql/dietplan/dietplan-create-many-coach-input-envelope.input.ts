import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DietplanCreateManyCoachInput } from './dietplan-create-many-coach.input';

@InputType()
export class DietplanCreateManyCoachInputEnvelope {

    @Field(() => [DietplanCreateManyCoachInput], {nullable:false})
    data!: Array<DietplanCreateManyCoachInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
