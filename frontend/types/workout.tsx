export interface WORKOUT {
  id: number;
  date: string;
  name: string;
  exercises: WORKOUT_ITEM[];
}

export interface WORKOUT_ITEM {
  id: string;
  exercise_id: string;
  name: string;
  sets: number;
  reps: number;
  rpe: number;
  notes?: string;
  audio?: string;
}

export enum ENUM_MUSLCE_GROUP {
  CHEST = "CHEST",
  BICEPS = "BICEPS",
  TRICPS = "TRICEPS",
  SHOULDERS = "SHOULDERS",
  TRAPS = "TRAPS",
  BACK = "BACK",
  QUADRICEPS = "QAUDRICEPS",
  HAMSTRINGS = "HAMSTRINGS",
  CALVES = "CALVES",
  GLUTES = "GLUTES",
}

export interface EXECISE_ITEM {
  id: string;
  name: string;
  createdAt: Date;
  primary_muscle: ENUM_MUSLCE_GROUP;
  image: string;
  video?: string;
  secondary_muscles: ENUM_MUSLCE_GROUP[];
  __typename: string;
}
