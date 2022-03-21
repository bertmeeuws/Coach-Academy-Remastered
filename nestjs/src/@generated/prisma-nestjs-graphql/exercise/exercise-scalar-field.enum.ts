import { registerEnumType } from '@nestjs/graphql';

export enum ExerciseScalarFieldEnum {
    id = "id",
    name = "name",
    primary_muscle = "primary_muscle",
    description = "description",
    image = "image",
    createdAt = "createdAt",
    video = "video",
    secondary_muscles = "secondary_muscles"
}


registerEnumType(ExerciseScalarFieldEnum, { name: 'ExerciseScalarFieldEnum', description: undefined })
