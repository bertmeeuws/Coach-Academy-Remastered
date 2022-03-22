import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CoachScalarWhereInput {
  @Field(() => [CoachScalarWhereInput], { nullable: true })
  AND?: Array<CoachScalarWhereInput>;

  @Field(() => [CoachScalarWhereInput], { nullable: true })
  OR?: Array<CoachScalarWhereInput>;

  @Field(() => [CoachScalarWhereInput], { nullable: true })
  NOT?: Array<CoachScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  surname?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;
}
