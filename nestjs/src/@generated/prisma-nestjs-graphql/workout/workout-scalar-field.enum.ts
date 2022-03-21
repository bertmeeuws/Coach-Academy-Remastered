import { registerEnumType } from '@nestjs/graphql';

export enum WorkoutScalarFieldEnum {
    id = "id",
    day = "day",
    name = "name",
    createdAt = "createdAt",
    coachId = "coachId",
    clientId = "clientId"
}


registerEnumType(WorkoutScalarFieldEnum, { name: 'WorkoutScalarFieldEnum', description: undefined })
