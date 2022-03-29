export interface IFoodDay {
  name: string;
  meals: IMeal[];
}

export interface IMeal {
  id: number;
  items: IMealItem[];
}

export interface IMealItem {
  id: string;
  name: string;
  carbs: number;
  protein: number;
  fats: number;
  notes: string;
  food_id: string;
}
