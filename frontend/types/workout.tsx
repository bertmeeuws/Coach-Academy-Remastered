export interface WORKOUT {
  id: number;
  date: string;
  name: string;
  exercises: WORKOUT_ITEM[];
}

export interface WORKOUT_ITEM {
  id: string;
  name: string;
  sets: number;
  reps: number;
  rpe: number;
  notes?: string;
  audio?: string;
}
