import { registerEnumType } from '@nestjs/graphql';

export enum CoachScalarFieldEnum {
    id = "id",
    userId = "userId",
    surname = "surname",
    name = "name"
}


registerEnumType(CoachScalarFieldEnum, { name: 'CoachScalarFieldEnum', description: undefined })
