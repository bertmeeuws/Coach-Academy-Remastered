import { registerEnumType } from '@nestjs/graphql';

export enum MUSCLE_GROUP {
    CHEST = "CHEST",
    BICEPS = "BICEPS",
    TRICPS = "TRICPS",
    SHOULDERS = "SHOULDERS",
    TRAPS = "TRAPS",
    BACK = "BACK",
    QUADRICEPS = "QUADRICEPS",
    HAMSTRINGS = "HAMSTRINGS",
    CALVES = "CALVES",
    GLUTES = "GLUTES"
}


registerEnumType(MUSCLE_GROUP, { name: 'MUSCLE_GROUP', description: undefined })
