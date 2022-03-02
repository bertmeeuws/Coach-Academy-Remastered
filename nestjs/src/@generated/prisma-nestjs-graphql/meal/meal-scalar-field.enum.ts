import { registerEnumType } from '@nestjs/graphql';

export enum MealScalarFieldEnum {
    id = "id",
    dietplanId = "dietplanId",
    day = "day"
}


registerEnumType(MealScalarFieldEnum, { name: 'MealScalarFieldEnum', description: undefined })
