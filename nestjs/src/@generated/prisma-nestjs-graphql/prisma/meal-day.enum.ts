import { registerEnumType } from '@nestjs/graphql';

export enum MEAL_DAY {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}


registerEnumType(MEAL_DAY, { name: 'MEAL_DAY', description: undefined })
