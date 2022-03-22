import { registerEnumType } from '@nestjs/graphql';

export enum MealPlanScalarFieldEnum {
  id = 'id',
  coachId = 'coachId'
}

registerEnumType(MealPlanScalarFieldEnum, {
  name: 'MealPlanScalarFieldEnum',
  description: undefined
});
