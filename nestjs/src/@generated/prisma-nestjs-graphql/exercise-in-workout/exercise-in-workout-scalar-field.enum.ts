import { registerEnumType } from '@nestjs/graphql';

export enum ExerciseInWorkoutScalarFieldEnum {
    id = "id",
    exerciseId = "exerciseId",
    meta = "meta",
    workoutId = "workoutId"
}


registerEnumType(ExerciseInWorkoutScalarFieldEnum, { name: 'ExerciseInWorkoutScalarFieldEnum', description: undefined })
